exports.grow = seed => 'b' + seed
  .split('')
  .map(s => s.charCodeAt(0).toString(2).padStart(8, 0))
  .join('').split('')
  .map(b => b == 0 ? 'a' : 'n')
  .join('')

exports.peel = banana => banana
  .slice(1)
  .split(/(.{8,8})/g)
  .filter(Boolean)
  .map(b => b
    .replace(/a/g, '0')
    .replace(/n/g, '1')
  )
  .map(s => parseInt(s, 2))
  .map(s => String.fromCharCode(s))
  .join('')
