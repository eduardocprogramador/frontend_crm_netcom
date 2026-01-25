export function handlePhoneChange(e, setPhone) {
  const input = e.target
  const numbers = input.value.replace(/\D/g, '').slice(0, 11) 
  let newValue = ''
  if (numbers.length <= 10) {
    if (numbers.length > 0) newValue = '(' + numbers.substring(0, 2)
    if (numbers.length >= 3) newValue += ') ' + numbers.substring(2, 6)
    if (numbers.length >= 7) newValue += '-' + numbers.substring(6, 10)
  } else {
    newValue = `(${numbers.substring(0, 2)}) ${numbers.substring(2, 7)}-${numbers.substring(7, 11)}`
  }
  setPhone(newValue)
}
