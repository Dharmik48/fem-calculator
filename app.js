const colorScheme = {
  theme1: {
    bgColor: 'hsl(222, 26%, 31%)',
    keypadBg: 'hsl(223, 31%, 20%)',
    screenBg: 'hsl(224, 36%, 15%)',
    keyBgGray: 'hsl(225, 21%, 49%)',
    keyShadowGray: 'hsl(224, 28%, 35%)',
    toggleBtn: 'hsl(6, 63%, 50%)',
    redShadow: 'hsl(6, 70%, 34%)',
    keyBg: 'hsl(30, 25%, 89%)',
    keyShadow: 'hsl(28, 16%, 65%)',
    text: 'hsl(221, 14%, 31%)',
    headerColor: 'hsl(0, 0%, 100%)'
  },
  theme2: {
    bgColor: 'hsl(0, 0%, 90%)',
    keypadBg: 'hsl(0, 5%, 81%)',
    screenBg: 'hsl(0, 0%, 93%)',
    keyBgGray: 'hsl(185, 42%, 37%)',
    keyShadowGray: 'hsl(185, 58%, 25%)',
    toggleBtn: 'hsl(25, 98%, 40%)',
    redShadow: 'hsl(25, 99%, 27%)',
    keyBg: 'hsl(45, 7%, 89%)',
    keyShadow: 'hsl(35, 11%, 61%)',
    text: 'hsl(60, 10%, 19%)',
    headerColor: 'hsl(60, 10%, 19%)',
  },
  theme3: {
    bgColor: 'hsl(268, 75%, 9%)',
    keypadBg: 'hsl(268, 71%, 12%)',
    screenBg: 'hsl(268, 71%, 12%)',
    keyBgGray: 'hsl(281, 89%, 26%)',
    keyShadowGray: 'hsl(285, 91%, 52%)',
    toggleBtn: 'hsl(176, 100%, 44%)',
    redShadow: 'hsl(177, 92%, 70%)',
    keyBg: 'hsl(268, 47%, 21%)',
    keyShadow: 'hsl(290, 70%, 36%)',
    text: 'hsl(52, 100%, 62%)',
    headerColor: 'hsl(52, 100%, 62%)',

  }
}

const theme1btn = document.getElementById('theme1'),
      theme2btn = document.getElementById('theme2'),
      theme3btn = document.getElementById('theme3')
const root = document.documentElement

theme1btn.addEventListener('click', () => {
  for (const color in colorScheme.theme1) {
    root.style.setProperty('--' + color, colorScheme.theme1[color])
  }
})
theme2btn.addEventListener('click', () => {
  for (const color in colorScheme.theme2) {
    root.style.setProperty('--' + color, colorScheme.theme2[color])
  }
})
theme3btn.addEventListener('click', () => {
  for (const color in colorScheme.theme3) {
    root.style.setProperty('--' + color, colorScheme.theme3[color])
  }
})