# Guide d'utilisation de la typographie globale

## Variables CSS disponibles

### Typographie principale
```css
--e-global-typography-primary-font-family: 'Inter', system-ui, sans-serif
--e-global-typography-primary-font-size: 16px
--e-global-typography-primary-font-weight: 400
--e-global-typography-primary-line-height: 1.6
--e-global-typography-primary-letter-spacing: 0
```

### Typographie secondaire (titres)
```css
--e-global-typography-secondary-font-family: 'Playfair Display', serif
--e-global-typography-secondary-font-weight: 600
```

### Couleurs
```css
--e-global-color-primary: #262626
--e-global-color-accent: #c4302b
--e-global-color-secondary: #d4a574
--e-global-color-neutral: #fafafa
```

## Utilisation dans les composants

### Option 1: Classe utilitaire
```jsx
<p className="global-typography">
  Ce texte utilise la typographie globale
</p>
```

### Option 2: Style inline avec variables
```jsx
<div style={{
  fontFamily: 'var(--e-global-typography-primary-font-family), Sans-serif',
  fontSize: 'var(--e-global-typography-primary-font-size)',
  fontWeight: 'var(--e-global-typography-primary-font-weight)',
  lineHeight: 'var(--e-global-typography-primary-line-height)',
  letterSpacing: 'var(--e-global-typography-primary-letter-spacing)',
  color: 'var(--e-global-color-primary)'
}}>
  Contenu avec typographie globale
</div>
```

### Option 3: CSS Modules ou styled-components
```css
.customComponent {
  font-family: var(--e-global-typography-primary-font-family), Sans-serif;
  font-size: var(--e-global-typography-primary-font-size);
  font-weight: var(--e-global-typography-primary-font-weight);
  line-height: var(--e-global-typography-primary-line-height);
  letter-spacing: var(--e-global-typography-primary-letter-spacing);
  color: var(--e-global-color-primary);
}
```

## Application automatique

Ces styles sont automatiquement appliqués à :
- `body` : Typographie de base
- `h1, h2, h3, h4, h5, h6` : Typographie des titres
- `.btn-primary, .btn-secondary` : Boutons avec typographie cohérente
