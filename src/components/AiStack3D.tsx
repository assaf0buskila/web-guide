import * as THREE from "three";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { BallCollider, Physics, RigidBody, type RapierRigidBody } from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();

type Style = "gptDark" | "gptLight" | "claudeBook" | "claudeLight" | "slate" | "warm";

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

const STYLES: Style[] = [
  "gptDark", "gptLight", "claudeBook", "claudeLight",
  "gptDark", "gptLight", "claudeBook", "claudeLight",
  "slate", "slate", "slate", "slate", "slate", "slate",
  "warm", "warm", "warm", "warm", "warm", "warm",
  "gptDark", "claudeBook", "gptLight", "claudeLight",
  "slate", "warm", "slate", "warm", "slate", "warm",
];

const scales = [0.72, 0.82, 0.92, 1, 1.12];
const balls = STYLES.map((style, index) => ({
  style,
  scale: scales[index % scales.length],
}));

function useMaterials() {
  return useMemo(() => {
    const base = {
      metalness: 0.42,
      roughness: 0.72,
      clearcoat: 0.35,
      clearcoatRoughness: 0.18,
      emissive: new THREE.Color("#ffffff"),
      emissiveIntensity: 0.18,
    };

    const logo = (url: string) => {
      const tex = textureLoader.load(url);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      return new THREE.MeshPhysicalMaterial({
        ...base,
        map: tex,
        emissiveMap: tex,
        emissiveIntensity: 0.12,
      });
    };

    const solid = (hex: string, rough = 0.55) =>
      new THREE.MeshPhysicalMaterial({
        ...base,
        color: new THREE.Color(hex),
        roughness: rough,
        emissiveIntensity: 0.08,
      });

    return {
      gptDark: logo("/images/gpt-dark.jpg"),
      gptLight: logo("/images/gpt.jpg"),
      claudeBook: logo("/images/claude.jpg"),
      claudeLight: logo("/images/claude-light.jpg"),
      slate: solid("#191919", 0.48),
      warm: solid("#D4A27F", 0.62),
    } as Record<Style, THREE.MeshPhysicalMaterial>;
  }, []);
}

function Ball({ scale, material, index }: { style: Style; scale: number; material: THREE.MeshPhysicalMaterial; index: number }) {
  const api = useRef<RapierRigidBody | null>(null);
  const vec = useMemo(() => new THREE.Vector3(), []);
  const swirl = useMemo(() => new THREE.Vector3(), []);
  const r = THREE.MathUtils.randFloatSpread;
  const pos = useMemo<[number, number, number]>(() => [r(18), r(12), r(12)], []);

  useFrame((_s, delta) => {
    if (!api.current) return;
    const d = Math.min(0.08, delta);
    const t = performance.now() * 0.00035 + index;
    const translation = api.current.translation();
    vec.set(translation.x, translation.y, translation.z);

    const centerPull = vec.clone().normalize().multiplyScalar(-52 * d * scale);
    swirl.set(Math.sin(t) * 6 * d, Math.cos(t * 1.2) * 5 * d, Math.sin(t * 0.7) * 3 * d);
    api.current.applyImpulse(centerPull.add(swirl), true);
    api.current.applyTorqueImpulse({ x: 0.015 * scale, y: 0.022 * scale, z: 0.01 * scale }, true);
  });

  return (
    <RigidBody ref={api} linearDamping={0.7} angularDamping={0.12} friction={0.18} position={pos} colliders={false}>
      <BallCollider args={[scale]} />
      <mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={material} rotation={[0.2, index * 0.4, 0.6]} />
    </RigidBody>
  );
}

function Pointer() {
  const ref = useRef<RapierRigidBody>(null);
  const vec = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ pointer, viewport }) => {
    vec.lerp(new THREE.Vector3((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0), 0.18);
    ref.current?.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody ref={ref} type="kinematicPosition" position={[100, 100, 100]} colliders={false}>
      <BallCollider args={[2.25]} />
    </RigidBody>
  );
}

export default function AiStack3D() {
  const materials = useMaterials();
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, stencil: false }}
      camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
      onCreated={(state) => (state.gl.toneMappingExposure = 1.55)}
    >
      <ambientLight intensity={0.9} />
      <spotLight position={[18, 22, 26]} angle={0.28} penumbra={1} intensity={1.5} castShadow color="#ffffff" />
      <directionalLight position={[-7, 5, 6]} intensity={1.8} />
      <Float speed={1.2} floatIntensity={0.25} rotationIntensity={0.08}>
        <Physics gravity={[0, 0, 0]}>
          <Pointer />
          {balls.map((b, i) => (
            <Ball key={i} index={i} style={b.style} scale={b.scale} material={materials[b.style]} />
          ))}
        </Physics>
      </Float>
      <Environment preset="studio" environmentIntensity={0.65} />
      <EffectComposer enableNormalPass={false}>
        <N8AO color="#191919" aoRadius={2.2} intensity={1.18} />
      </EffectComposer>
    </Canvas>
  );
}
