/* @ds-bundle: {"format":4,"namespace":"ZNLabsDesignSystem_f60c1a","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"LogoWall","sourcePath":"components/content/LogoWall.jsx"},{"name":"MediaFrame","sourcePath":"components/content/MediaFrame.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CapsuleNav","sourcePath":"components/navigation/CapsuleNav.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"4b3b48904ab8","components/content/LogoWall.jsx":"f315f7b8eccd","components/content/MediaFrame.jsx":"2fb9e86b480e","components/content/SectionHeading.jsx":"1b1e65d9742a","components/content/Stat.jsx":"0ce9fdbb0d34","components/content/Testimonial.jsx":"fb73a60941a4","components/core/Badge.jsx":"533c860126ca","components/core/Button.jsx":"b63c8b107c62","components/core/Card.jsx":"e5142204e1da","components/core/Divider.jsx":"ead685de372f","components/core/Eyebrow.jsx":"8a97d24a19bb","components/core/Icon.jsx":"9c74c07b2ef5","components/core/IconButton.jsx":"9e7149174222","components/feedback/Banner.jsx":"ec924715d5d6","components/feedback/Dialog.jsx":"8c9617c96e32","components/feedback/Tooltip.jsx":"1c6dfe9e2a67","components/forms/Checkbox.jsx":"592592713f5d","components/forms/Input.jsx":"3230f622318d","components/forms/Select.jsx":"831cb6f9c82b","components/forms/Switch.jsx":"4a12b3fde8d6","components/forms/Textarea.jsx":"0671daf079b7","components/navigation/CapsuleNav.jsx":"3962301ee39b","components/navigation/Footer.jsx":"1ffa6a026e5b","components/navigation/Tabs.jsx":"21ba50bec8a1","ui_kits/clinic-site/BookVisit.jsx":"16a2b873d7fd","ui_kits/clinic-site/ClinicApp.jsx":"075f38941787","ui_kits/clinic-site/ClinicHome.jsx":"f75bc3b2cc60","ui_kits/clinic-site/Treatments.jsx":"8017c0b56621","ui_kits/zn-labs-site/App.jsx":"a0c76b3196df","ui_kits/zn-labs-site/Contact.jsx":"24f5602c0dba","ui_kits/zn-labs-site/Home.jsx":"5e2b1a345bb1","ui_kits/zn-labs-site/Work.jsx":"fc35e45140ff"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZNLabsDesignSystem_f60c1a = window.ZNLabsDesignSystem_f60c1a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--line-soft)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: it.question,
      style: {
        borderBottom: '1px solid var(--line-soft)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        padding: 'var(--space-6) 0',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-display-med)',
        fontSize: '20px',
        letterSpacing: 'var(--ls-title)',
        color: 'var(--text-display)'
      }
    }, it.question, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '0 0 auto',
        width: '28px',
        height: '28px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '1px solid var(--line-soft)',
        fontSize: '14px',
        color: 'var(--text-muted)',
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-standard)'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? '320px' : '0',
        overflow: 'hidden',
        transition: 'max-height var(--dur-base) var(--ease-standard),opacity var(--dur-base) var(--ease-standard)',
        opacity: isOpen ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 0 var(--space-6)',
        maxWidth: '62ch',
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-muted)'
      }
    }, it.answer)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/MediaFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Image container. When no src is supplied it renders the house placeholder:
   a sunken warm panel with a tracked caption — never a fake illustration. */
function MediaFrame({
  src,
  alt = '',
  ratio = '16 / 9',
  radius = 'var(--radius-media)',
  caption,
  overlay,
  placeholder = 'Image',
  tone = 'light',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      overflow: 'hidden',
      borderRadius: radius,
      background: 'var(--surface-sunken)',
      border: '1px solid var(--line-hairline)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, placeholder), overlay && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-6)',
      background: 'var(--gradient-protect-bottom)',
      color: 'var(--text-inverse)'
    }
  }, overlay)), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: tone === 'inverse' ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  suffix,
  tone = 'light',
  align = 'left',
  style,
  ...rest
}) {
  const dark = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-display)',
      fontSize: 'clamp(36px,3.4vw,52px)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-display)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-display)'
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.55em',
      marginLeft: '2px',
      color: 'var(--text-accent)'
    }
  }, suffix)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      fontWeight: 500
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  name,
  role,
  align = 'center',
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'inverse';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: '62ch',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(20px,2.1vw,28px)',
      lineHeight: 1.45,
      letterSpacing: 'var(--ls-title)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-display)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 500,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-inverse)' : 'var(--text-display)'
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, role)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const znBadgeTone = {
  neutral: {
    bg: 'var(--surface-sunken)',
    fg: 'var(--text-body)',
    bd: 'transparent'
  },
  accent: {
    bg: 'var(--amber-50)',
    fg: 'var(--amber-800)',
    bd: 'var(--amber-200)'
  },
  success: {
    bg: 'var(--status-success-bg)',
    fg: 'var(--status-success-fg)',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--status-danger-bg)',
    fg: 'var(--status-danger-fg)',
    bd: 'transparent'
  },
  info: {
    bg: 'var(--status-info-bg)',
    fg: 'var(--status-info-fg)',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--text-body)',
    bd: 'var(--line-soft)'
  },
  inverse: {
    bg: 'rgba(250,249,246,.12)',
    fg: 'var(--text-inverse)',
    bd: 'var(--line-inverse)'
  }
};
function Badge({
  tone = 'neutral',
  uppercase = false,
  dot = false,
  children,
  style,
  ...rest
}) {
  const t = znBadgeTone[tone] || znBadgeTone.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: '26px',
      padding: '0 11px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: '1px solid ' + t.bd,
      fontFamily: 'var(--font-sans)',
      fontSize: uppercase ? '11px' : '13px',
      fontWeight: 500,
      letterSpacing: uppercase ? 'var(--ls-label)' : '0',
      textTransform: uppercase ? 'uppercase' : 'none',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: .8
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const znBtnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  fontFamily: 'var(--font-sans)',
  transition: 'var(--transition-control), transform var(--dur-fast) var(--ease-standard)'
};
const znBtnSizes = {
  sm: {
    height: '34px',
    padding: '0 16px',
    fontSize: '13px',
    fontWeight: 500
  },
  md: {
    height: '42px',
    padding: '0 22px',
    fontSize: '14px',
    fontWeight: 500
  },
  lg: {
    height: '52px',
    padding: '0 30px',
    fontSize: '15px',
    fontWeight: 500
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = znVariant(variant, hover);
  const uppercase = variant === 'outline';
  const s = {
    ...znBtnBase,
    ...znBtnSizes[size],
    ...v,
    borderRadius: shape === 'square' ? 'var(--radius-xs)' : 'var(--radius-pill)',
    width: fullWidth ? '100%' : 'auto',
    letterSpacing: uppercase ? 'var(--ls-label)' : '0.005em',
    textTransform: uppercase ? 'uppercase' : 'none',
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    transform: press ? 'scale(var(--press-scale))' : 'none',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
function znVariant(variant, hover) {
  switch (variant) {
    case 'accent':
      return {
        background: hover ? 'var(--amber-400)' : 'var(--zn-amber)',
        color: 'var(--zn-ink)',
        boxShadow: hover ? 'var(--shadow-sm)' : 'none'
      };
    case 'secondary':
      return {
        background: 'var(--surface-card)',
        color: 'var(--text-display)',
        borderColor: hover ? 'var(--line-strong)' : 'var(--line-soft)',
        boxShadow: hover ? 'var(--shadow-sm)' : 'var(--shadow-xs)'
      };
    case 'ghost':
      return {
        background: hover ? 'var(--surface-sunken)' : 'transparent',
        color: 'var(--text-display)'
      };
    case 'outline':
      return {
        background: hover ? 'var(--zn-ink)' : 'transparent',
        color: hover ? 'var(--text-inverse)' : 'currentColor',
        borderColor: 'currentColor'
      };
    case 'inverse':
      return {
        background: hover ? 'rgba(250,249,246,.86)' : 'var(--stone-50)',
        color: 'var(--zn-ink)'
      };
    default:
      return {
        background: hover ? 'var(--stone-700)' : 'var(--zn-ink)',
        color: 'var(--text-inverse)'
      };
  }
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'default',
  padding = 'lg',
  interactive = false,
  as = 'div',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      boxShadow: hover && interactive ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      color: 'var(--text-body)'
    },
    quiet: {
      background: 'var(--surface-sunken)',
      border: '1px solid transparent',
      boxShadow: 'none',
      color: 'var(--text-body)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--line-soft)',
      boxShadow: 'none',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid transparent',
      boxShadow: 'none',
      color: 'var(--text-inverse)'
    },
    veil: {
      background: 'var(--surface-veil)',
      border: '1px solid rgba(255,255,255,.6)',
      boxShadow: 'var(--shadow-float)',
      backdropFilter: 'var(--blur-veil)',
      WebkitBackdropFilter: 'var(--blur-veil)',
      color: 'var(--text-body)'
    }
  };
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--card-pad-lg)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-card)',
      padding: pads[padding],
      transition: 'var(--transition-surface)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      ...skins[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  orientation = 'horizontal',
  tone = 'soft',
  label,
  style,
  ...rest
}) {
  const color = tone === 'inverse' ? 'var(--line-inverse)' : tone === 'strong' ? 'var(--line-strong)' : 'var(--line-hairline)';
  if (orientation === 'vertical') return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: '1px',
      alignSelf: 'stretch',
      background: color,
      ...style
    }
  }, rest));
  if (label) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      width: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: tone === 'inverse' ? 'var(--text-inverse-muted)' : 'var(--text-faint)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: color
    }
  }));
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      width: '100%',
      border: 0,
      borderTop: '1px solid ' + color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  rule = false,
  tone = 'muted',
  children,
  style,
  ...rest
}) {
  const color = tone === 'inverse' ? 'var(--text-inverse-muted)' : tone === 'accent' ? 'var(--text-accent)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '1px',
      background: 'currentColor',
      opacity: .45
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoWall({
  title,
  logos = [],
  tone = 'light',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-8)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: tone === 'inverse' ? 'inverse' : 'muted'
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'var(--space-12)'
    }
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: tone === 'inverse' ? 'var(--text-inverse-muted)' : 'var(--text-faint)',
      filter: 'grayscale(1)',
      opacity: .9
    }
  }, typeof l === 'string' ? l : /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.alt || '',
    style: {
      height: l.height || 24
    }
  })))));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  size = 'md',
  action,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'inverse';
  const fs = size === 'lg' ? 'var(--fs-display-2)' : size === 'sm' ? 'var(--fs-display-3)' : 'var(--fs-display-3)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 'var(--space-4)',
      maxWidth: align === 'center' ? 'var(--container-narrow)' : 'none',
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    rule: align !== 'center',
    tone: dark ? 'inverse' : 'muted'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-display)',
      fontSize: fs,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-display)'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '56ch',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, lede), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide (MIT), loaded from CDN by the host page:
   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js"></script>
   ZN Labs uses 1.5 stroke weight, round caps — never filled glyphs, never emoji. */
function Icon({
  name,
  size = 18,
  stroke = 1.5,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': stroke,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        }
      });
    }
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const znIbSizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  name,
  variant = 'secondary',
  size = 'md',
  label,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = znIbSizes[size];
  const skin = variant === 'primary' ? {
    background: hover ? 'var(--stone-700)' : 'var(--zn-ink)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  } : variant === 'ghost' ? {
    background: hover ? 'var(--surface-sunken)' : 'transparent',
    color: 'var(--text-display)',
    border: '1px solid transparent'
  } : {
    background: 'var(--surface-card)',
    color: 'var(--text-display)',
    border: '1px solid ' + (hover ? 'var(--line-strong)' : 'var(--line-soft)')
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...skin,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === 'sm' ? 15 : size === 'lg' ? 20 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Banner({
  tone = 'neutral',
  title,
  children,
  action,
  onDismiss,
  align = 'center',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--surface-sunken)',
      fg: 'var(--text-body)'
    },
    accent: {
      bg: 'var(--amber-50)',
      fg: 'var(--amber-800)'
    },
    success: {
      bg: 'var(--status-success-bg)',
      fg: 'var(--status-success-fg)'
    },
    danger: {
      bg: 'var(--status-danger-bg)',
      fg: 'var(--status-danger-fg)'
    },
    ink: {
      bg: 'var(--surface-inverse)',
      fg: 'var(--text-inverse)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '100%',
      background: t.bg,
      color: t.fg,
      padding: 'var(--space-5) var(--gutter)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 'var(--space-3)'
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      fontWeight: 600
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 'var(--lh-body)',
      opacity: .86
    }
  }, children), action), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      position: 'absolute',
      right: '16px',
      top: '12px',
      border: 0,
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'var(--surface-veil-dark)',
      backdropFilter: 'var(--blur-veil)',
      WebkitBackdropFilter: 'var(--blur-veil)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-sheet)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--card-pad-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-title)',
      letterSpacing: 'var(--ls-title)',
      color: 'var(--text-display)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      whiteSpace: 'nowrap',
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      boxShadow: 'var(--shadow-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    if (checked === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: toggle,
    style: {
      display: 'inline-flex',
      gap: '12px',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      flex: '0 0 auto',
      marginTop: '1px',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (on ? 'var(--zn-ink)' : 'var(--line-strong)'),
      background: on ? 'var(--zn-ink)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-control)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--stone-50)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--text-display)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  size = 'md',
  icon,
  shape = 'pill',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'lg' ? 52 : size === 'sm' ? 36 : 44;
  return /*#__PURE__*/React.createElement(ZnInputField, {
    label: label,
    hint: hint,
    error: error
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      height: h,
      padding: shape === 'pill' ? '0 20px' : '0 14px',
      background: 'var(--surface-card)',
      border: '1px solid ' + (error ? 'var(--status-danger-fg)' : focus ? 'var(--zn-ink)' : 'var(--line-soft)'),
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-sm)' : 'var(--shadow-xs)',
      transition: 'var(--transition-control)',
      ...style
    }
  }, icon, /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-display)',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? '13px' : '15px'
    }
  }, rest))));
}
function ZnInputField({
  label,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label), children, (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: error ? 'var(--status-danger-fg)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'lg' ? 52 : size === 'sm' ? 36 : 44;
  return /*#__PURE__*/React.createElement(ZnSelectField, {
    label: label,
    hint: hint,
    error: error
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: h,
      padding: '0 42px 0 20px',
      appearance: 'none',
      WebkitAppearance: 'none',
      background: 'var(--surface-card)',
      color: 'var(--text-display)',
      border: '1px solid ' + (error ? 'var(--status-danger-fg)' : focus ? 'var(--zn-ink)' : 'var(--line-soft)'),
      borderRadius: 'var(--radius-pill)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-sm)' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  })));
}
function ZnSelectField({
  label,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label), children, (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: error ? 'var(--status-danger-fg)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    if (checked === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '44px',
      height: '26px',
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--zn-ink)' : 'var(--stone-300)',
      padding: '3px',
      display: 'inline-flex',
      transition: 'background-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'var(--stone-0)',
      boxShadow: 'var(--shadow-xs)',
      transform: on ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--text-display)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement(ZnTextareaField, {
    label: label,
    hint: hint,
    error: error
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      resize: 'vertical',
      padding: '14px 18px',
      background: 'var(--surface-card)',
      color: 'var(--text-display)',
      border: '1px solid ' + (error ? 'var(--status-danger-fg)' : focus ? 'var(--zn-ink)' : 'var(--line-soft)'),
      borderRadius: 'var(--radius-lg)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-sm)' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 'var(--lh-body)',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest)));
}
function ZnTextareaField({
  label,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label), children, (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: error ? 'var(--status-danger-fg)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CapsuleNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The floating capsule header from the reference set: white pill, hairline border, soft float shadow,
   tracked uppercase links, one pill action on the right. */
function CapsuleNav({
  brand,
  links = [],
  action,
  active,
  onNavigate,
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: sticky ? '16px' : 0,
      zIndex: 20,
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: '0 var(--gutter)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      width: '100%',
      maxWidth: 'var(--container-max)',
      height: '68px',
      padding: '0 10px 0 26px',
      background: 'var(--surface-veil)',
      backdropFilter: 'var(--blur-veil)',
      WebkitBackdropFilter: 'var(--blur-veil)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-float)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flex: '0 0 auto'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      margin: '0 auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l);
      }
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: 'var(--ls-nav)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active === l.label ? 'var(--text-display)' : 'var(--text-muted)',
      transition: 'var(--transition-control)'
    }
  }, l.label))), action && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto'
    }
  }, typeof action === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary"
  }, action) : action)));
}
Object.assign(__ds_scope, { CapsuleNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CapsuleNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  brand,
  tagline,
  columns = [],
  legal,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: dark ? 'var(--surface-inverse)' : 'var(--surface-canvas)',
      borderTop: '1px solid ' + (dark ? 'transparent' : 'var(--line-hairline)'),
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      padding: 'var(--space-20) 0 var(--space-10)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(' + Math.max(columns.length, 1) + ',1fr)',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, brand, tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '26ch',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 'var(--lh-body)',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, tagline)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'inverse' : 'muted'
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      textDecoration: 'none',
      color: dark ? 'var(--text-inverse)' : 'var(--text-body)'
    }
  }, l)))))), legal && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-16) auto 0',
      padding: 'var(--space-6) var(--gutter) 0',
      borderTop: '1px solid ' + (dark ? 'var(--line-inverse)' : 'var(--line-hairline)'),
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px'
    }
  }, legal));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue || items[0] && (items[0].value || items[0]));
  const cur = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const norm = items.map(i => typeof i === 'string' ? {
    label: i,
    value: i
  } : i);
  if (variant === 'pill') return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      gap: '4px',
      padding: '4px',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), norm.map(i => /*#__PURE__*/React.createElement("button", {
    key: i.value,
    onClick: () => pick(i.value),
    style: {
      height: '34px',
      padding: '0 18px',
      border: 0,
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      background: cur === i.value ? 'var(--surface-card)' : 'transparent',
      color: cur === i.value ? 'var(--text-display)' : 'var(--text-muted)',
      boxShadow: cur === i.value ? 'var(--shadow-xs)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 500,
      transition: 'var(--transition-control)'
    }
  }, i.label)));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      borderBottom: '1px solid var(--line-soft)',
      ...style
    }
  }, rest), norm.map(i => /*#__PURE__*/React.createElement("button", {
    key: i.value,
    onClick: () => pick(i.value),
    style: {
      position: 'relative',
      padding: '0 0 14px',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: cur === i.value ? 'var(--text-display)' : 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 500,
      transition: 'var(--transition-control)'
    }
  }, i.label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-1px',
      height: '1px',
      background: cur === i.value ? 'var(--zn-ink)' : 'transparent'
    }
  }))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinic-site/BookVisit.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  Eyebrow,
  Input,
  Select,
  Textarea,
  Checkbox,
  Dialog,
  SectionHeading,
  Divider,
  Badge
} = window.ZNLabsDesignSystem_f60c1a;
const bs = {
  width: '100%',
  maxWidth: 'var(--container-narrow)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
const znDays = [{
  d: 'Mon',
  n: '15'
}, {
  d: 'Tue',
  n: '16'
}, {
  d: 'Wed',
  n: '17'
}, {
  d: 'Thu',
  n: '18'
}, {
  d: 'Fri',
  n: '19'
}, {
  d: 'Sat',
  n: '20'
}];
const znSlots = {
  '15': ['09:00', '11:30', '15:00'],
  '16': ['08:30', '10:00', '13:30', '16:30'],
  '17': ['09:30', '14:00'],
  '18': ['08:30', '11:00', '12:30', '15:30', '17:00'],
  '19': ['10:30', '13:00'],
  '20': ['09:00', '09:30', '10:00']
};
function BookVisit({
  onDone
}) {
  const [day, setDay] = React.useState('16');
  const [slot, setSlot] = React.useState(null);
  const [done, setDone] = React.useState(false);
  const picked = znDays.find(x => x.n === day);
  const dateLabel = picked ? picked.d + ' ' + picked.n + ' Dec' : '';
  return /*#__PURE__*/React.createElement("main", {
    style: {
      ...bs,
      padding: 'var(--space-16) var(--gutter) var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Book a visit",
    title: "Pick a time",
    lede: "Choose a slot and tell us who you are. We confirm by text within the hour."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      marginTop: 'var(--space-10)',
      borderRadius: 'var(--radius-panel)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Treatment"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Check-up & X-rays · £95', 'Hygienist · £75', 'Emergency appointment', 'Whitening consultation']
  })), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-8) 0 var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "December"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, znDays.map(x => {
    const on = day === x.n;
    return /*#__PURE__*/React.createElement("button", {
      key: x.n,
      onClick: () => {
        setDay(x.n);
        setSlot(null);
      },
      style: {
        padding: 'var(--space-4) 0',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        background: on ? 'var(--zn-ink)' : 'var(--surface-card)',
        color: on ? 'var(--text-inverse)' : 'var(--text-display)',
        border: '1px solid ' + (on ? 'transparent' : 'var(--line-soft)'),
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-label)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        opacity: .65
      }
    }, x.d), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        marginTop: 4
      }
    }, x.n));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, (znSlots[day] || []).map(t => {
    const on = slot === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setSlot(t),
      style: {
        height: 40,
        padding: '0 20px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        font: 'var(--type-mono)',
        fontSize: 13,
        background: on ? 'var(--zn-amber)' : 'var(--surface-sunken)',
        color: 'var(--zn-ink)',
        border: '1px solid ' + (on ? 'var(--amber-600)' : 'transparent'),
        transition: 'var(--transition-control)'
      }
    }, t);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'center',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, (znSlots[day] || []).length, " slots")), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-8) 0 var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Your details"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Rachel Bright"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mobile",
    placeholder: "07700 900 118"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "rachel@example.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Patient",
    options: ['New patient', 'Registered here']
  })), /*#__PURE__*/React.createElement(Textarea, {
    style: {
      marginTop: 'var(--space-4)'
    },
    label: "Anything we should know?",
    rows: 3,
    placeholder: "Nervous patient \u2014 happy to book a longer slot."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Text me a reminder the day before",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 17,
    style: {
      color: 'var(--text-accent)'
    }
  }), slot ? /*#__PURE__*/React.createElement(React.Fragment, null, dateLabel, " \xB7 ", slot) : /*#__PURE__*/React.createElement(React.Fragment, null, "No time selected yet")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    disabled: !slot,
    onClick: () => setDone(true)
  }, "Request this slot"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline",
    uppercase: true
  }, "No card needed"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline",
    uppercase: true
  }, "Free to cancel 24h before")), /*#__PURE__*/React.createElement(Dialog, {
    open: done,
    title: "Slot requested",
    description: 'We have held ' + (slot || '') + ' on ' + dateLabel + '. You will get a text within the hour to confirm.',
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setDone(false);
        onDone && onDone();
      }
    }, "Back to the site"),
    onClose: () => setDone(false)
  }));
}
Object.assign(window, {
  BookVisit
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinic-site/BookVisit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinic-site/ClinicApp.jsx
try { (() => {
const {
  CapsuleNav,
  Footer,
  Banner,
  Button
} = window.ZNLabsDesignSystem_f60c1a;
function ClinicApp() {
  const [screen, setScreen] = React.useState('Home');
  const [notice, setNotice] = React.useState(true);
  const brand = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--zn-amber)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      letterSpacing: '-0.01em',
      color: 'var(--text-display)'
    }
  }, "Northside Dental"));
  return /*#__PURE__*/React.createElement("div", null, notice && /*#__PURE__*/React.createElement(Banner, {
    tone: "ink",
    style: {
      position: 'relative'
    },
    onDismiss: () => setNotice(false),
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "inverse",
      onClick: () => setScreen('Book')
    }, "Book online")
  }, "Closed 24\u201326 December. The emergency line stays open on 0113 496 0128."), /*#__PURE__*/React.createElement(CapsuleNav, {
    brand: brand,
    active: screen,
    links: [{
      label: 'Home'
    }, {
      label: 'Treatments'
    }, {
      label: 'Team'
    }, {
      label: 'Fees'
    }],
    onNavigate: l => setScreen(l.label === 'Treatments' ? 'Treatments' : 'Home'),
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setScreen('Book')
    }, "Book a visit")
  }), screen === 'Home' && /*#__PURE__*/React.createElement(ClinicHome, {
    onBook: () => setScreen('Book'),
    onTreatments: () => setScreen('Treatments')
  }), screen === 'Treatments' && /*#__PURE__*/React.createElement(Treatments, {
    onBook: () => setScreen('Book')
  }), screen === 'Book' && /*#__PURE__*/React.createElement(BookVisit, {
    onDone: () => setScreen('Home')
  }), /*#__PURE__*/React.createElement(Footer, {
    tone: "dark",
    brand: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        color: 'var(--text-inverse)'
      }
    }, "Northside Dental"),
    tagline: "14 Otley Road, Headingley, Leeds LS6 2AA",
    columns: [{
      title: 'Treatments',
      links: ['Check-ups', 'Hygiene', 'Whitening', 'Implants', 'Invisalign']
    }, {
      title: 'Practice',
      links: ['Our team', 'Fees & plans', 'New patients', 'Reviews']
    }, {
      title: 'Hours',
      links: ['Mon–Fri 08:30–18:00', 'Sat 09:00–13:00', 'Sun closed']
    }, {
      title: 'Contact',
      links: ['0113 496 0128', 'hello@northsidedental.co.uk', 'Find us']
    }],
    legal: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Northside Dental"), /*#__PURE__*/React.createElement("span", null, "Site by ZN Labs"))
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ClinicApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinic-site/ClinicApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinic-site/ClinicHome.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Eyebrow,
  SectionHeading,
  Stat,
  Accordion,
  Testimonial,
  MediaFrame,
  Divider
} = window.ZNLabsDesignSystem_f60c1a;
const cs = {
  width: '100%',
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
function ClinicHome({
  onBook,
  onTreatments
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...cs,
      paddingTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-panel)',
      overflow: 'hidden',
      background: 'var(--gradient-dusk)',
      minHeight: '520px',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '22ch'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse",
    uppercase: true
  }, "Accepting new patients"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--space-5) 0 var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(44px,5vw,72px)',
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      color: 'var(--text-inverse)'
    }
  }, "Careful dentistry in Headingley"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '40ch',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-inverse-muted)'
    }
  }, "A family practice since 1998. Same-day emergency slots, and a hygienist you'll actually want to see."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: onBook
  }, "Book a visit"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    style: {
      color: 'var(--text-inverse)'
    },
    onClick: onTreatments
  }, "Treatments"))), /*#__PURE__*/React.createElement(Card, {
    variant: "veil",
    padding: "md",
    style: {
      width: 300,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, [['clock', 'Open until 18:00'], ['calendar-check', '3 slots left today'], ['phone', '0113 496 0128']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 16,
    style: {
      color: 'var(--text-accent)'
    }
  }), t))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    fullWidth: true,
    style: {
      marginTop: 'var(--space-5)'
    },
    onClick: onBook
  }, "See times"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...cs,
      padding: 'var(--space-16) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8)'
    }
  }, [['shield-check', 'GDC registered', 'Every clinician on the register, checked annually.'], ['calendar-check', 'Same-day emergencies', 'Call before 10:00 and we will see you that day.'], ['star', '4.9 from 312 reviews', 'Google reviews, collected after every visit.'], ['clock', 'Saturday mornings', '09:00–13:00, no extra charge.']].map(([i, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20,
    style: {
      color: 'var(--text-accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--text-display)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: 'var(--space-20) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cs
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Treatments",
    title: "What we do, and what it costs",
    lede: "Prices are fixed and published. No consultation fee for new patients.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      }),
      onClick: onTreatments
    }, "All treatments")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-10)'
    }
  }, [['Check-up & X-rays', '£95', 'Twenty minutes, every six months.'], ['Hygienist', '£75', 'Scale, polish and a plan you can keep.'], ['Whitening', '£320', 'Take-home trays, two weeks.']].map(([t, p, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 23,
      color: 'var(--text-display)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 14,
      color: 'var(--text-display)'
    }
  }, p)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, b), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-5) 0 var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onBook,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Book")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...cs,
      padding: 'var(--space-20) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The team",
    title: "Six people, one building, twenty-eight years"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-10)'
    }
  }, [['Dr. Ellen Marsh', 'Principal dentist'], ['Dr. Yusuf Kara', 'Implants'], ['Priya Nair', 'Hygienist'], ['Sam Okoro', 'Practice manager']].map(([n, r]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 5",
    placeholder: "Portrait"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      color: 'var(--text-display)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '4px'
    }
  }, r)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      padding: 'var(--space-20) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cs,
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    tone: "inverse",
    align: "left",
    quote: "First dentist I have not dreaded. They explained the cost before touching anything.",
    name: "Rachel B.",
    role: "Patient since 2019"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "4.9",
    label: "Google rating"
  }), /*#__PURE__*/React.createElement(Divider, {
    tone: "inverse"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "312",
    label: "Reviews"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...cs,
      padding: 'var(--space-20) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Find us",
    title: "14 Otley Road, Headingley",
    lede: "Two minutes from the Arndale Centre. Free parking behind the practice."
  }), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "16 / 10",
    placeholder: "Map \u2014 Headingley, Leeds",
    style: {
      marginTop: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Weekdays"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 14,
      marginTop: 6,
      color: 'var(--text-body)'
    }
  }, "08:30\u201318:00")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Saturday"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 14,
      marginTop: 6,
      color: 'var(--text-body)'
    }
  }, "09:00\u201313:00")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Sunday"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 14,
      marginTop: 6,
      color: 'var(--text-faint)'
    }
  }, "Closed")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions",
    title: "New patients"
  }), /*#__PURE__*/React.createElement(Accordion, {
    style: {
      marginTop: 'var(--space-8)'
    },
    items: [{
      question: 'Are you taking NHS patients?',
      answer: 'We hold a small NHS list for children and exempt adults. Private plans start at £16 a month.'
    }, {
      question: 'What happens at a first visit?',
      answer: 'A full examination, X-rays if needed, and a written plan with prices before anything is booked.'
    }, {
      question: 'Do you see emergencies?',
      answer: 'Call before 10:00 and we will find you a slot the same day.'
    }, {
      question: 'Is there parking?',
      answer: 'Six free spaces behind the practice, entrance on Chapel Street.'
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...cs,
      paddingBottom: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      borderRadius: 'var(--radius-panel)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(26px,2.8vw,38px)',
      letterSpacing: '-0.02em',
      color: 'var(--text-display)'
    }
  }, "Book in under a minute."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      color: 'var(--text-muted)'
    }
  }, "Pick a time that suits. We'll confirm by text.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onBook
  }, "Book a visit"))));
}
Object.assign(window, {
  ClinicHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinic-site/ClinicHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinic-site/Treatments.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  Tabs,
  SectionHeading,
  Accordion,
  MediaFrame,
  Divider,
  Badge
} = window.ZNLabsDesignSystem_f60c1a;
const ts = {
  width: '100%',
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
const znTreatments = [{
  group: 'Everyday',
  name: 'Check-up & X-rays',
  price: '£95',
  time: '20 min',
  note: 'Examination, X-rays and a written plan.'
}, {
  group: 'Everyday',
  name: 'Hygienist',
  price: '£75',
  time: '30 min',
  note: 'Scale, polish and home routine.'
}, {
  group: 'Everyday',
  name: 'White filling',
  price: '£165',
  time: '45 min',
  note: 'Composite, colour-matched.'
}, {
  group: 'Cosmetic',
  name: 'Take-home whitening',
  price: '£320',
  time: '2 weeks',
  note: 'Custom trays and gel.'
}, {
  group: 'Cosmetic',
  name: 'Composite bonding',
  price: '£240',
  time: '60 min',
  note: 'Per tooth, no drilling.'
}, {
  group: 'Cosmetic',
  name: 'Invisalign',
  price: 'from £2,400',
  time: '6–12 months',
  note: 'Includes retainers and reviews.'
}, {
  group: 'Restorative',
  name: 'Crown',
  price: '£650',
  time: '2 visits',
  note: 'Ceramic, made in Leeds.'
}, {
  group: 'Restorative',
  name: 'Implant',
  price: 'from £2,100',
  time: '3–6 months',
  note: 'Placement, abutment and crown.'
}, {
  group: 'Restorative',
  name: 'Root canal',
  price: 'from £420',
  time: '60–90 min',
  note: 'Single visit where possible.'
}];
function Treatments({
  onBook
}) {
  const [group, setGroup] = React.useState('Everyday');
  const list = znTreatments.filter(t => t.group === group);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...ts,
      padding: 'var(--space-16) var(--gutter) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Treatments",
    title: "Fixed prices, written down",
    lede: "Every price below is what you pay. If a plan changes, we tell you before we start."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Everyday', 'Cosmetic', 'Restorative'],
    value: group,
    onChange: setGroup,
    variant: "pill"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...ts,
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    padding: "none",
    style: {
      overflow: 'hidden'
    }
  }, list.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 0.6fr 0.6fr',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-6) var(--card-pad-lg)',
      borderTop: i ? '1px solid var(--line-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      color: 'var(--text-display)'
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, t.note), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, t.time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 14,
      color: 'var(--text-display)'
    }
  }, t.price), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: onBook
  }, "Book")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: 'var(--space-16) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ts,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Membership"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-4) 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(28px,3vw,42px)',
      letterSpacing: '-0.02em',
      color: 'var(--text-display)'
    }
  }, "\xA316 a month covers the routine"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '46ch',
      fontSize: 16,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, "Two check-ups, two hygienist visits, X-rays and 20% off everything else. Cancel any time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onBook
  }, "Join the plan"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "What's included"))), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 3",
    placeholder: "Hygienist at work"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...ts,
      padding: 'var(--space-16) var(--gutter) var(--space-24)',
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Paying",
    title: "Costs and cover"
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: 'Do you offer payment plans?',
      answer: 'Yes — 0% over six months on treatment over £500, arranged in the practice.'
    }, {
      question: 'Do you take insurance?',
      answer: 'We invoice all major dental insurers directly, including Denplan and Bupa.'
    }, {
      question: 'What if I need to cancel?',
      answer: 'Give us 24 hours and there is no charge. Late cancellations are £25.'
    }]
  })));
}
Object.assign(window, {
  Treatments
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinic-site/Treatments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zn-labs-site/App.jsx
try { (() => {
const {
  CapsuleNav,
  Footer,
  Button
} = window.ZNLabsDesignSystem_f60c1a;
function ZnApp() {
  const [screen, setScreen] = React.useState('Home');
  const links = [{
    label: 'Work'
  }, {
    label: 'Services'
  }, {
    label: 'Contact'
  }];
  const go = l => setScreen(l.label === 'Services' ? 'Home' : l.label);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CapsuleNav, {
    brand: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/zn-labs-logo.png",
      alt: "ZN Labs",
      style: {
        height: 24
      }
    }),
    links: links,
    active: screen,
    onNavigate: go,
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setScreen('Contact')
    }, "Book a call")
  }), screen === 'Home' && /*#__PURE__*/React.createElement(ZnHome, {
    onCta: () => setScreen('Contact'),
    onWork: () => setScreen('Work')
  }), screen === 'Work' && /*#__PURE__*/React.createElement(ZnWork, {
    onCta: () => setScreen('Contact')
  }), screen === 'Contact' && /*#__PURE__*/React.createElement(ZnContact, null), /*#__PURE__*/React.createElement(Footer, {
    brand: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/zn-labs-logo.png",
      alt: "ZN Labs",
      style: {
        height: 28
      }
    }),
    tagline: "Tech partners for dental clinics. We run the site, you run the clinic.",
    columns: [{
      title: 'Services',
      links: ['Websites', 'Online booking', 'Local SEO', 'Care & hosting']
    }, {
      title: 'Work',
      links: ['Northside Dental', 'Rao Dental', 'Bright Smile Co.']
    }, {
      title: 'Company',
      links: ['About', 'Journal', 'Contact']
    }, {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Accessibility']
    }],
    legal: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ZN Labs"), /*#__PURE__*/React.createElement("span", null, "Bengaluru \xB7 London"))
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ZnApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zn-labs-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zn-labs-site/Contact.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  Eyebrow,
  Input,
  Textarea,
  Select,
  Checkbox,
  Dialog,
  SectionHeading,
  Divider
} = window.ZNLabsDesignSystem_f60c1a;
const znContactSection = {
  width: '100%',
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
function ZnContact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      ...znContactSection,
      padding: 'var(--space-20) var(--gutter) var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Book a call",
    title: "Twenty minutes, no pitch deck",
    lede: "Tell us about the practice. We'll come back with what we'd change first."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-10)'
    }
  }, [['mail', 'hello@znlabs.studio'], ['phone', '+44 113 496 0128'], ['clock', 'Mon–Fri · 09:00–18:00 GMT'], ['map-pin', 'Bengaluru · London']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 17,
    style: {
      color: 'var(--text-faint)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, t)))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-10) 0'
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "What happens next"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 'var(--space-4) 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      counterReset: 's'
    }
  }, ['We reply within one working day.', 'A 20-minute call, screen shared.', 'A fixed-price proposal, two pages.'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 12,
      color: 'var(--text-accent)',
      paddingTop: '2px'
    }
  }, "0", i + 1), t)))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      borderRadius: 'var(--radius-panel)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Dr. Anita Rao"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Practice",
    placeholder: "Rao Dental"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "hello@clinic.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Chairs",
    options: ['1–2 chairs', '3–5 chairs', '6+ chairs']
  })), /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    options: ['A new website', 'Online booking', 'Local SEO & reviews', 'All of it']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Anything else",
    rows: 4,
    placeholder: "We're moving premises in March and the old site can't be edited\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the monthly note",
    description: "One email a month about what's working for other practices."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Request a call"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)',
      textAlign: 'center'
    }
  }, "We reply within one working day. No sequences, no CRM chase.")))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    title: "Request received",
    description: "We'll email within one working day with two or three times that suit.",
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSent(false)
    }, "Done"),
    onClose: () => setSent(false)
  }));
}
Object.assign(window, {
  ZnContact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zn-labs-site/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zn-labs-site/Home.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Eyebrow,
  SectionHeading,
  Stat,
  Accordion,
  Testimonial,
  MediaFrame,
  LogoWall,
  Divider
} = window.ZNLabsDesignSystem_f60c1a;
const znSection = {
  width: '100%',
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
function ZnHome({
  onCta,
  onWork
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: 'var(--space-24) 0 var(--space-16)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-halo)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...znSection,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline",
    uppercase: true
  }, "Dental web partners"), /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: '16ch',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(48px,6vw,86px)',
      lineHeight: 1.03,
      letterSpacing: '-0.02em',
      color: 'var(--text-display)'
    }
  }, "Websites that fill the chair"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '52ch',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, "We design, build and run the website for your practice \u2014 booking, recall and reviews wired in from day one."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onCta
  }, "Book a call"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: onWork,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16
    })
  }, "See our work")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...znSection,
      paddingBottom: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-panel)',
      background: 'var(--gradient-dusk)',
      padding: 'var(--space-10) var(--space-10) 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Northside Dental \xB7 Leeds"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '32px',
      color: 'var(--text-inverse)',
      letterSpacing: '-0.01em'
    }
  }, "Four weeks, launch to first booking")), /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse",
    uppercase: true
  }, "Case study")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--stone-200)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '8px',
      flex: 1,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sunken)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      font: 'var(--type-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "northsidedental.co.uk")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 3",
    placeholder: "Clinic reception"
  }), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 3",
    placeholder: "Treatment room"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "38",
    suffix: "%",
    label: "More bookings"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Stat, {
    value: "1.2",
    suffix: "s",
    label: "Median load"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...znSection,
      paddingBottom: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(LogoWall, {
    title: "Clinics we work with",
    logos: ["Northside Dental", "Rao Dental", "Bright Smile Co.", "Kanti Orthodontics", "Harbour Dental"]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: 'var(--space-24) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: znSection
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we build",
    title: "One partner. One site. Everything after.",
    lede: "Design, build, and the quiet operational work that keeps a practice full."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-12)'
    }
  }, [['layout-template', 'Practice websites', 'Four-week builds on your own domain, written and photographed around how your clinic actually works.'], ['calendar-check', 'Online booking', 'Patients pick a slot without calling. Slots sync to your practice software; reminders go out by SMS.'], ['search', 'Local SEO & reviews', 'Maps, hours and treatment pages that rank for the streets around you — plus review requests after every visit.']].map(([icon, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: "default",
    padding: "lg",
    interactive: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    style: {
      color: 'var(--text-accent)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 'var(--space-5) 0 var(--space-3)',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 24,
      letterSpacing: '-0.01em',
      color: 'var(--text-display)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...znSection,
      padding: 'var(--space-24) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Selected work",
    title: "Practices we've put online",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      }),
      onClick: onWork
    }, "All work")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-10)'
    }
  }, [['Northside Dental', 'Leeds · Family practice'], ['Rao Dental', 'Pune · Implants'], ['Bright Smile Co.', 'Bristol · Cosmetic']].map(([n, m]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 5",
    placeholder: n
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--text-display)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, m)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      padding: 'var(--space-24) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...znSection,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    tone: "inverse",
    quote: "Our chairs are full and the phone rings less. The site does the front desk's first hour of work before anyone arrives.",
    name: "Dr. Anita Rao",
    role: "Rao Dental, Pune"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "38",
    suffix: "%",
    label: "More online bookings"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "4",
    label: "Week build"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "12",
    label: "Clinics live"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "1.2",
    suffix: "s",
    label: "Median load"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...znSection,
      padding: 'var(--space-24) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions",
    title: "Before you ask",
    lede: "The things every practice owner wants to know first."
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: 'How long does a build take?',
      answer: 'Four weeks from kickoff to launch, including copy, photography direction and booking setup.'
    }, {
      question: 'Do you handle hosting?',
      answer: 'Yes. Hosting, domain, SSL, backups and monitoring are part of the monthly care plan.'
    }, {
      question: 'Will it work with our practice software?',
      answer: 'We integrate with the major UK and India practice management systems, or run a standalone booking calendar.'
    }, {
      question: 'What does it cost?',
      answer: 'A single-site build starts at £4,800, then £180 a month for care, hosting and changes.'
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...znSection,
      paddingBottom: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    padding: "lg",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      borderRadius: 'var(--radius-panel)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(28px,3vw,40px)',
      letterSpacing: '-0.02em',
      color: 'var(--text-display)'
    }
  }, "Let's look at your practice."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 16,
      color: 'var(--text-muted)'
    }
  }, "A 20-minute call. We'll tell you what we'd change first, whether or not you hire us.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onCta
  }, "Book a call"))));
}
Object.assign(window, {
  ZnHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zn-labs-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zn-labs-site/Work.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Eyebrow,
  SectionHeading,
  Stat,
  Tabs,
  Testimonial,
  MediaFrame,
  Divider
} = window.ZNLabsDesignSystem_f60c1a;
const znWorkSection = {
  width: '100%',
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
const znProjects = [{
  name: 'Northside Dental',
  place: 'Leeds',
  type: 'Clinics',
  note: 'Family practice · 3 chairs'
}, {
  name: 'Rao Dental',
  place: 'Pune',
  type: 'Specialists',
  note: 'Implants & oral surgery'
}, {
  name: 'Bright Smile Co.',
  place: 'Bristol',
  type: 'Clinics',
  note: 'Cosmetic & whitening'
}, {
  name: 'Kanti Orthodontics',
  place: 'Ahmedabad',
  type: 'Specialists',
  note: 'Braces & aligners'
}, {
  name: 'Harbour Dental',
  place: 'Plymouth',
  type: 'Clinics',
  note: 'NHS & private'
}, {
  name: 'Ridge Endodontics',
  place: 'Leeds',
  type: 'Specialists',
  note: 'Referral practice'
}];
function ZnWork({
  onCta
}) {
  const [filter, setFilter] = React.useState('All');
  const list = znProjects.filter(p => filter === 'All' || p.type === filter);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...znWorkSection,
      padding: 'var(--space-20) var(--gutter) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Selected work",
    title: "Twelve practices, one way of working",
    lede: "Every site below was designed, built and is still run by us."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['All', 'Clinics', 'Specialists'],
    value: filter,
    onChange: setFilter,
    variant: "pill"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, list.length, " projects"))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...znWorkSection,
      paddingBottom: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    variant: "quiet",
    padding: "sm",
    interactive: true
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 3",
    placeholder: p.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-2) var(--space-2)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      color: 'var(--text-display)'
    }
  }, p.name), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 15,
    style: {
      color: 'var(--text-faint)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, p.note), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '4px'
    }
  }, p.place)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: 'var(--space-20) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...znWorkSection,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Case study"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-4) 0 var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(32px,3.4vw,48px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--text-display)'
    }
  }, "Northside Dental"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '50ch',
      fontSize: 16,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, "A three-chair family practice with a fifteen-year-old site and a phone that never stopped ringing. We rebuilt around the two things patients actually wanted: hours and a slot."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-10)',
      margin: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "38",
    suffix: "%",
    label: "More bookings"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\u221241",
    suffix: "%",
    label: "Reception calls"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4",
    label: "Week build"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 15
    })
  }, "Read the case study")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 5",
    placeholder: "Reception"
  }), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 5",
    placeholder: "Booking screen",
    style: {
      marginTop: 'var(--space-8)'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...znWorkSection,
      padding: 'var(--space-24) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "They asked better questions than our last three agencies combined, then shipped in a month.",
    name: "Sam Okoro",
    role: "Practice manager, Northside Dental"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onCta
  }, "Start a project")));
}
Object.assign(window, {
  ZnWork
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zn-labs-site/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CapsuleNav = __ds_scope.CapsuleNav;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
