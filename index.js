const circle = new mojs.Shape({
    shape:        'circle',
    scale:        { 0 : 1 },
    left:         '25%',
    fill:         { 'cyan': 'yellow' },
    radius:       25,
  
    duration:     2000,
    repeat:       999,
  }).play();
  
  const rect = new mojs.Shape({
    shape:        'rect',
    left:         '50%',
    fill:         'none',
    radius:       20,
    stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
    strokeWidth:  { 10: 0 },
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    rotate:        { 0: 180 },
  
    duration:     2000,
    repeat:       999,
  }).play();
  
  const polygon = new mojs.Shape({
    shape:        'polygon',
    points:       5,
    left:         '75%',
    fill:         { 'deeppink' : '#00F87F' },
    x:            { 'rand(-100%, -200%)' : 0  },
    rotate:        { 0: 'rand(0, 360)' },
    radius:       25,
  
    duration:     2000,
    repeat:       999,
  }).play();