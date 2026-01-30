/**
 * Dust Particle Engine
 * Creates floating dust motes for western ambiance
 */

import { $ } from '../utils/dom.js';

const PARTICLE_COUNT = 30;

export function initParticles() {
  const container = $('#particles');
  if (!container) return;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random positioning
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.left = `${Math.random() * 100}vw`;
    
    // Random animation duration and delay
    const duration = 6 + Math.random() * 8;
    const delay = Math.random() * 6;
    
    particle.style.animation = `dust ${duration}s linear infinite`;
    particle.style.animationDelay = `-${delay}s`;
    
    // Random size variation
    const size = 2 + Math.random() * 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random opacity variation
    particle.style.opacity = (0.3 + Math.random() * 0.4).toString();
    
    container.appendChild(particle);
  }
}
