"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBackground() {
  const racksRef = useRef<SVGSVGElement>(null);
  const nodesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Layer 1 CSS animation is handled via globals.css or inline style tags.
    // For GSAP animations on Layer 3 (LEDs) and Layer 4 (Nodes):
    
    // Layer 3: Server LED pulses
    if (racksRef.current) {
      gsap.to(".server-led", {
        opacity: 1,
        duration: 0.8,
        stagger: {
          each: 0.15,
          repeat: -1,
          yoyo: true,
        },
        ease: "power1.inOut"
      });
    }

    // Layer 4: Network Nodes pulse and ripple
    if (nodesRef.current) {
      const nodes = gsap.utils.toArray(".network-node");
      
      nodes.forEach((node: any, i) => {
        // Create a ripple circle for each node
        const ripple = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ripple.setAttribute("cx", node.getAttribute("cx"));
        ripple.setAttribute("cy", node.getAttribute("cy"));
        ripple.setAttribute("r", node.getAttribute("r"));
        ripple.setAttribute("fill", "transparent");
        ripple.setAttribute("stroke", "rgba(59, 130, 246, 0.6)");
        ripple.setAttribute("stroke-width", "1");
        node.parentNode.insertBefore(ripple, node);

        const tl = gsap.timeline({ repeat: -1, delay: i * 0.4 });
        
        // Node pulse
        tl.to(node, {
          scale: 1.4,
          transformOrigin: "center center",
          duration: 0.5,
          ease: "power2.out"
        })
        .to(node, {
          scale: 1.0,
          duration: 1.0,
          ease: "power2.inOut"
        }, "+=0.1");

        // Ripple effect
        gsap.to(ripple, {
          attr: { r: parseInt(node.getAttribute("r")) * 3 },
          opacity: 0,
          duration: 1.5,
          repeat: -1,
          delay: i * 0.4,
          ease: "power2.out"
        });
      });

      // Connection lines pulse
      gsap.to(".node-line", {
        opacity: 0.3,
        duration: 2,
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true
        },
        ease: "sine.inOut"
      });
    }

  }, []);

  return (
    <>
      {/* LAYER 1: Circuit Board Base */}
      <div className="hero-layer-1 absolute inset-0 z-0 hidden md:block overflow-hidden opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path 
                className="circuit-draw"
                d="M 20,0 L 20,40 L 60,80 L 200,80 M 0,120 L 40,120 L 80,160 L 80,200 M 140,0 L 140,60 L 180,100 L 180,200 M 0,40 L 100,40 L 140,80 L 140,120 L 100,160 L 0,160" 
                stroke="rgba(26, 86, 219, 0.08)" 
                strokeWidth="0.5" 
                fill="none" 
              />
              <circle cx="20" cy="40" r="3" fill="rgba(59, 130, 246, 0.12)" />
              <circle cx="60" cy="80" r="3" fill="rgba(59, 130, 246, 0.12)" />
              <circle cx="40" cy="120" r="3" fill="rgba(59, 130, 246, 0.12)" />
              <circle cx="80" cy="160" r="3" fill="rgba(59, 130, 246, 0.12)" />
              <circle cx="140" cy="60" r="3" fill="rgba(59, 130, 246, 0.12)" />
              <circle cx="180" cy="100" r="3" fill="rgba(59, 130, 246, 0.12)" />
              <circle cx="100" cy="40" r="3" fill="rgba(59, 130, 246, 0.12)" />
              <circle cx="140" cy="120" r="3" fill="rgba(59, 130, 246, 0.12)" />
              <circle cx="100" cy="160" r="3" fill="rgba(59, 130, 246, 0.12)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
        <style dangerouslySetInnerHTML={{__html: `
          .circuit-draw {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: drawCircuit 3s ease-out forwards;
          }
          @keyframes drawCircuit {
            to { stroke-dashoffset: 0; }
          }
        `}} />
      </div>

      {/* LAYER 2: Data Pipeline Flow */}
      <div className="hero-layer-2 absolute inset-0 z-0 overflow-hidden">
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <path id="path1" d="M -100,200 C 300,200 400,600 1500,600" />
            <path id="path2" d="M -100,500 C 400,500 500,100 1500,100" />
            <path id="path3" d="M -100,800 C 200,800 600,400 1500,400" />
            <path id="path4" d="M -100,100 C 600,100 800,800 1500,800" />
            <path id="path5" d="M -100,400 C 200,400 300,700 1500,700" />
          </defs>
          
          <g stroke="rgba(26, 86, 219, 0.2)" strokeWidth="1.5" fill="none">
            <use href="#path1" />
            <use href="#path2" />
            <use href="#path3" />
            <use href="#path4" className="hidden md:block" />
            <use href="#path5" className="hidden md:block" />
          </g>

          <g fill="#3B82F6" filter="url(#glow)">
            <circle r="4">
              <animateMotion dur="4s" repeatCount="indefinite" begin="0s"><mpath href="#path1" /></animateMotion>
            </circle>
            <circle r="4">
              <animateMotion dur="6s" repeatCount="indefinite" begin="1s"><mpath href="#path2" /></animateMotion>
            </circle>
            <circle r="4">
              <animateMotion dur="5s" repeatCount="indefinite" begin="0.5s"><mpath href="#path3" /></animateMotion>
            </circle>
            <circle r="4" className="hidden md:block">
              <animateMotion dur="7s" repeatCount="indefinite" begin="2s"><mpath href="#path4" /></animateMotion>
            </circle>
            <circle r="4" className="hidden md:block">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s"><mpath href="#path5" /></animateMotion>
            </circle>
          </g>
        </svg>
      </div>

      {/* LAYER 3: Server Rack Silhouettes */}
      <div className="hero-layer-3 absolute right-[5%] top-[15%] h-[70%] w-[35%] z-0 hidden md:block">
        <svg ref={racksRef} width="100%" height="100%" viewBox="0 0 300 500" preserveAspectRatio="xMidYMid meet">
          {/* Rack 1 (Tall) */}
          <g transform="translate(20, 50)" stroke="#1A56DB" strokeWidth="1" opacity="0.12">
            <rect x="0" y="0" width="60" height="400" fill="none" />
            {Array.from({ length: 20 }).map((_, i) => (
              <g key={`r1-${i}`} transform={`translate(0, ${i * 20})`}>
                <line x1="0" y1="20" x2="60" y2="20" opacity="0.5" />
                <rect className="server-led" x="5" y="8" width="4" height="4" fill="#DBEAFE" stroke="none" opacity="0.4" />
                <rect className="server-led" x="12" y="8" width="4" height="4" fill="#3B82F6" stroke="none" opacity="0.4" />
              </g>
            ))}
          </g>
          {/* Rack 2 (Medium) */}
          <g transform="translate(110, 150)" stroke="#1A56DB" strokeWidth="1" opacity="0.08">
            <rect x="0" y="0" width="60" height="300" fill="none" />
            {Array.from({ length: 15 }).map((_, i) => (
              <g key={`r2-${i}`} transform={`translate(0, ${i * 20})`}>
                <line x1="0" y1="20" x2="60" y2="20" opacity="0.5" />
                <rect className="server-led" x="44" y="8" width="4" height="4" fill="#DBEAFE" stroke="none" opacity="0.4" />
                <rect className="server-led" x="51" y="8" width="4" height="4" fill="#3B82F6" stroke="none" opacity="0.4" />
              </g>
            ))}
          </g>
          {/* Rack 3 (Short) */}
          <g transform="translate(200, 250)" stroke="#1A56DB" strokeWidth="1" opacity="0.06">
            <rect x="0" y="0" width="60" height="200" fill="none" />
            {Array.from({ length: 10 }).map((_, i) => (
              <g key={`r3-${i}`} transform={`translate(0, ${i * 20})`}>
                <line x1="0" y1="20" x2="60" y2="20" opacity="0.5" />
                <rect className="server-led" x="5" y="8" width="4" height="4" fill="#3B82F6" stroke="none" opacity="0.4" />
                <rect className="server-led" x="51" y="8" width="4" height="4" fill="#3B82F6" stroke="none" opacity="0.4" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* LAYER 4: Network Node Topology */}
      <div className="hero-layer-4 absolute inset-0 z-0">
        <svg ref={nodesRef} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Lines */}
          <g stroke="rgba(26, 86, 219, 0.15)" strokeWidth="0.5" className="node-lines">
            <line className="node-line" x1="10%" y1="20%" x2="25%" y2="40%" opacity="0.1" />
            <line className="node-line hidden md:block" x1="25%" y1="40%" x2="45%" y2="25%" opacity="0.1" />
            <line className="node-line" x1="25%" y1="40%" x2="35%" y2="70%" opacity="0.1" />
            <line className="node-line hidden md:block" x1="45%" y1="25%" x2="70%" y2="35%" opacity="0.1" />
            <line className="node-line" x1="70%" y1="35%" x2="85%" y2="60%" opacity="0.1" />
            <line className="node-line" x1="35%" y1="70%" x2="60%" y2="80%" opacity="0.1" />
            <line className="node-line hidden md:block" x1="60%" y1="80%" x2="85%" y2="60%" opacity="0.1" />
            <line className="node-line" x1="15%" y1="85%" x2="35%" y2="70%" opacity="0.1" />
          </g>
          {/* Nodes */}
          <g fill="rgba(59, 130, 246, 0.3)">
            <circle className="network-node" cx="10%" cy="20%" r="6" />
            <circle className="network-node" cx="25%" cy="40%" r="8" />
            <circle className="network-node hidden md:block" cx="45%" cy="25%" r="5" />
            <circle className="network-node" cx="35%" cy="70%" r="7" />
            <circle className="network-node hidden md:block" cx="70%" cy="35%" r="6" />
            <circle className="network-node" cx="85%" cy="60%" r="8" />
            <circle className="network-node hidden md:block" cx="60%" cy="80%" r="5" />
            <circle className="network-node" cx="15%" cy="85%" r="6" />
          </g>
        </svg>
      </div>
    </>
  );
}
