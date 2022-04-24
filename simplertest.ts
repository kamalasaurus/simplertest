export default function simplertest(suite, clearDOM = true) {
  suite.forEach(([slug, statement, assertion], i: number) => {
    try {
      const s = statement()
      const a = assertion(s)

      // it's easy to drop a debugger in based on iteration number
      // either here or in the assertion or the statement bodies
      //if (i===1) debugger

      if (!a) console.error(`${String.fromCodePoint(0x274c)} test ${i} FAILED ${slug}`)
      if (a) console.log(`%c${String.fromCodePoint(0x2705)} test ${i} SUCCESS ${slug}`, 'color: lightgreen;')
    } catch(e) {
      console.error(`${String.fromCodePoint(0x274c)} test ${i} ERROR ${slug} ${e}`, 'color: red')
    } finally {
      if(clearDOM) document.body.innerHTML = ''
    }
  })
}