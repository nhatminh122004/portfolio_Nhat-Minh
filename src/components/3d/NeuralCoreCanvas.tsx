import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const NeuralCoreCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvasTest = document.createElement('canvas');
    const gl = canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    // 1. SCENE & CAMERA SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03050b, 0.022);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const updateCameraResponsive = (w: number) => {
      if (w < 640) {
        camera.position.set(0, -0.2, 12.8);
      } else if (w < 1024) {
        camera.position.set(0, -0.1, 11.0);
      } else {
        camera.position.set(0, 0, 9.5);
      }
    };
    updateCameraResponsive(width);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.72;
    container.appendChild(renderer.domElement);

    // Root Pivot Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 2. SOFT, REFINED SCI-FI LIGHTING (Eye-friendly & high contrast)
    const ambientLight = new THREE.AmbientLight(0x060c1c, 1.4);
    scene.add(ambientLight);

    const mainCyanLight = new THREE.PointLight(0x00e5ff, 2.2, 30);
    mainCyanLight.position.set(5, 4, 6);
    scene.add(mainCyanLight);

    const deepVioletLight = new THREE.PointLight(0x8b5cf6, 2.4, 30);
    deepVioletLight.position.set(-5, -4, 4);
    scene.add(deepVioletLight);

    const centerGlow = new THREE.PointLight(0x38bdf8, 1.4, 12);
    centerGlow.position.set(0, 0, 0);
    rootGroup.add(centerGlow);

    const accentGoldLight = new THREE.PointLight(0xf59e0b, 0.8, 15);
    accentGoldLight.position.set(0, 6, -2);
    scene.add(accentGoldLight);

    // 3. LAYER 1: MULTI-FACETED INNER QUANTUM NUCLEUS (Gentle dark crystal)
    const innerGeom = new THREE.IcosahedronGeometry(1.35, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x030a16,
      emissive: 0x002640,
      emissiveIntensity: 0.35,
      roughness: 0.25,
      metalness: 0.75,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      reflectivity: 0.8,
      flatShading: true,
      transparent: true,
      opacity: 0.65,
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    rootGroup.add(innerCore);

    // Subtle edge highlight for inner core
    const innerEdgesGeom = new THREE.EdgesGeometry(innerGeom);
    const innerEdgesMat = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const innerEdges = new THREE.LineSegments(innerEdgesGeom, innerEdgesMat);
    innerCore.add(innerEdges);

    // Inner Pulsing Singularity Heart
    const heartGeom = new THREE.OctahedronGeometry(0.65, 0);
    const heartMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const heart = new THREE.Mesh(heartGeom, heartMat);
    rootGroup.add(heart);

    // 4. LAYER 2: OUTER GEODESIC EXOSKELETON (Soft wireframe)
    const exoGeom = new THREE.IcosahedronGeometry(1.9, 2);
    const exoWireGeom = new THREE.WireframeGeometry(exoGeom);
    const exoWireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });
    const exoCage = new THREE.LineSegments(exoWireGeom, exoWireMat);
    rootGroup.add(exoCage);

    // 5. LAYER 3: SYNAPTIC NEURAL CLUSTER
    const nodeCount = 65;
    const clusterRadius = 2.65;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGroup = new THREE.Group();
    rootGroup.add(nodeGroup);

    // Distribute nodes evenly on spherical shell using golden spiral
    const phiSpan = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phiSpan * i;
      const r = clusterRadius + (Math.random() - 0.5) * 0.5;

      const pos = new THREE.Vector3(
        Math.cos(theta) * radiusAtY * r,
        y * r,
        Math.sin(theta) * radiusAtY * r
      );
      nodePositions.push(pos);
    }

    // Node spheres
    const nodeSphereGeom = new THREE.SphereGeometry(0.036, 8, 8);
    const cyanNodeMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
    const violetNodeMat = new THREE.MeshBasicMaterial({ color: 0xc084fc });
    const goldNodeMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });

    nodePositions.forEach((pos, idx) => {
      const mat = idx % 5 === 0 ? goldNodeMat : idx % 3 === 0 ? violetNodeMat : cyanNodeMat;
      const nodeMesh = new THREE.Mesh(nodeSphereGeom, mat);
      nodeMesh.position.copy(pos);
      nodeGroup.add(nodeMesh);
    });

    // Synaptic Connecting Lines
    const connectionPairs: { a: THREE.Vector3; b: THREE.Vector3 }[] = [];
    const lineCoords: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 1.35) {
          connectionPairs.push({ a: nodePositions[i], b: nodePositions[j] });
          lineCoords.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }

    const linesGeom = new THREE.BufferGeometry();
    linesGeom.setAttribute('position', new THREE.Float32BufferAttribute(lineCoords, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });
    const linesMesh = new THREE.LineSegments(linesGeom, linesMat);
    nodeGroup.add(linesMesh);

    // Dynamic Traveling Synaptic Data Pulses (Traveling along lines)
    const pulseCount = 14;
    const pulseGeom = new THREE.SphereGeometry(0.03, 6, 6);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const pulseMeshes: { mesh: THREE.Mesh; pairIndex: number; progress: number; speed: number }[] = [];

    for (let p = 0; p < pulseCount; p++) {
      const pMesh = new THREE.Mesh(pulseGeom, pulseMat);
      const pairIndex = Math.floor(Math.random() * connectionPairs.length);
      const speed = 0.008 + Math.random() * 0.015;
      pulseMeshes.push({ mesh: pMesh, pairIndex, progress: Math.random(), speed });
      nodeGroup.add(pMesh);
    }

    // 6. LAYER 4: MULTI-AXIAL HOLOGRAPHIC GIMBAL RINGS
    const createTechRing = (radius: number, tube: number, color: number, tiltX: number, tiltY: number) => {
      const ringGeom = new THREE.TorusGeometry(radius, tube, 3, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = tiltX;
      ringMesh.rotation.y = tiltY;
      return ringMesh;
    };

    const ring1 = createTechRing(3.1, 0.015, 0x00e5ff, Math.PI / 3, Math.PI / 6);
    const ring2 = createTechRing(3.6, 0.014, 0x8b5cf6, -Math.PI / 4, Math.PI / 3);
    const ring3 = createTechRing(4.2, 0.016, 0x38bdf8, Math.PI / 2.3, -Math.PI / 4);
    const ringOuter = createTechRing(4.8, 0.012, 0x00e5ff, Math.PI / 6, -Math.PI / 2.5);

    rootGroup.add(ring1);
    rootGroup.add(ring2);
    rootGroup.add(ring3);
    rootGroup.add(ringOuter);

    // Orbiting Drones with Trail Beacons
    const droneGeom = new THREE.OctahedronGeometry(0.09, 0);
    const droneMat1 = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
    const droneMat2 = new THREE.MeshBasicMaterial({ color: 0xc084fc });
    const drone1 = new THREE.Mesh(droneGeom, droneMat1);
    const drone2 = new THREE.Mesh(droneGeom, droneMat2);
    rootGroup.add(drone1);
    rootGroup.add(drone2);

    // 7. LAYER 5: DENSE VOLUMETRIC DATA STARFIELD & DUST
    const particleCount = 1200;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00e5ff);
    const colorViolet = new THREE.Color(0x8b5cf6);
    const colorSky = new THREE.Color(0x38bdf8);
    const colorWhite = new THREE.Color(0xf8fafc);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 9.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const dice = Math.random();
      const chosenColor = dice > 0.7 ? colorViolet : dice > 0.35 ? colorCyan : dice > 0.15 ? colorSky : colorWhite;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.034,
      vertexColors: true,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
    });
    const starfield = new THREE.Points(particleGeom, particleMat);
    scene.add(starfield);

    // 8. POINTER & SCROLL POSITION DYNAMICS
    let targetPointerX = 0;
    let targetPointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetPointerX = nx * 0.55;
      targetPointerY = ny * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      updateCameraResponsive(w);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, w < 768 ? 1.5 : 2));
    };

    // Touch event pointer handler for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const nx = (touch.clientX / window.innerWidth) * 2 - 1;
        const ny = -(touch.clientY / window.innerHeight) * 2 + 1;
        targetPointerX = nx * 0.45;
        targetPointerY = ny * 0.35;
      }
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    window.addEventListener('resize', handleResize);

    // 9. HIGH-PERFORMANCE 60 FPS RENDER LOOP
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth damped lerp for cursor motion
      currentPointerX += (targetPointerX - currentPointerX) * 0.05;
      currentPointerY += (targetPointerY - currentPointerY) * 0.05;

      // Scroll position parallax
      const scrollY = window.scrollY || 0;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const scrollRatio = scrollY / maxScroll;

      // Choreographed root transformations based on scroll & pointer
      rootGroup.rotation.x = currentPointerY * 0.8 + scrollRatio * 1.2;
      rootGroup.rotation.y = currentPointerX * 0.9 + elapsed * 0.14 + scrollRatio * 2.4;
      rootGroup.position.y = -scrollRatio * 1.5;
      rootGroup.position.z = Math.sin(scrollRatio * Math.PI) * 0.8;

      // Inner Core Organic Breathing & Counter Rotation
      const breathPulse = 1 + Math.sin(elapsed * 2.2) * 0.07;
      innerCore.scale.set(breathPulse, breathPulse, breathPulse);
      innerCore.rotation.y = -elapsed * 0.32;
      innerCore.rotation.z = Math.sin(elapsed * 0.4) * 0.2;

      // Central Heart Quick Pulsing
      const heartPulse = 1 + Math.sin(elapsed * 4.5) * 0.15;
      heart.scale.set(heartPulse, heartPulse, heartPulse);
      heart.rotation.x = elapsed * 0.6;
      heart.rotation.y = elapsed * 0.8;

      // Outer Exoskeleton Counter spin
      exoCage.rotation.y = elapsed * 0.18;
      exoCage.rotation.x = Math.sin(elapsed * 0.25) * 0.12;

      // Synaptic Cluster Rotation
      nodeGroup.rotation.y = elapsed * 0.1;

      // Update Active Synaptic Pulses
      pulseMeshes.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.pairIndex = Math.floor(Math.random() * connectionPairs.length);
        }
        const pair = connectionPairs[pulse.pairIndex];
        if (pair) {
          pulse.mesh.position.lerpVectors(pair.a, pair.b, pulse.progress);
        }
      });

      // Rings Harmonic Multi-Speed Rotation
      ring1.rotation.z = elapsed * 0.24;
      ring2.rotation.z = -elapsed * 0.19;
      ring3.rotation.z = elapsed * 0.15;
      ringOuter.rotation.z = -elapsed * 0.11;

      // Orbiting Drones Positioning
      const angle1 = elapsed * 0.8;
      drone1.position.set(
        Math.cos(angle1) * 3.6,
        Math.sin(angle1 * 1.3) * 1.8,
        Math.sin(angle1) * 2.8
      );
      drone1.rotation.y = elapsed * 2;

      const angle2 = -elapsed * 0.65 + 2.0;
      drone2.position.set(
        Math.sin(angle2) * 4.2,
        Math.cos(angle2 * 0.9) * 2.5,
        Math.cos(angle2) * 3.2
      );
      drone2.rotation.z = elapsed * 2;

      // Ambient Starfield Drift
      starfield.rotation.y = -elapsed * 0.025;
      starfield.rotation.x = Math.sin(elapsed * 0.02) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // 10. CLEAN RESOURCE DISPOSAL
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      renderer.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      innerEdgesGeom.dispose();
      innerEdgesMat.dispose();
      heartGeom.dispose();
      heartMat.dispose();
      exoGeom.dispose();
      exoWireGeom.dispose();
      exoWireMat.dispose();
      nodeSphereGeom.dispose();
      cyanNodeMat.dispose();
      violetNodeMat.dispose();
      goldNodeMat.dispose();
      linesGeom.dispose();
      linesMat.dispose();
      pulseGeom.dispose();
      pulseMat.dispose();
      ring1.geometry.dispose();
      ring2.geometry.dispose();
      ring3.geometry.dispose();
      ringOuter.geometry.dispose();
      droneGeom.dispose();
      droneMat1.dispose();
      droneMat2.dispose();
      particleGeom.dispose();
      particleMat.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      style={{ overflow: 'hidden' }}
      aria-hidden="true"
    />
  );
};
