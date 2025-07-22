import React from 'react';
import '../../Styles/BrandHero.css';

function BrandHero() {
  return (
  <section className="brand-hero">
  <div className="brand-hero-content">
    <h1 className="brand-title">Brands by Urban Kitchen</h1>
    <p className="brand-description">
      Urban Kitchen proudly brings you a diverse range of culinary experiences through its premium brands —
      <strong> Healthy Salads & Detox</strong> for clean eating, 
      <strong> Jus Friez</strong> for tasty indulgences, and
      <strong> Protein Xclusive</strong> for fitness-friendly fuel.
      One mission, many flavors — all from the house of Urban Kitchen.
    </p>
  </div>
</section>

  );
}

export default BrandHero;
