import glob from 'fast-glob'
import * as path from 'path'

async function importLetter(letterFilename) {
  let { meta, default: component } = await import(
    `../pages/letters/${letterFilename}`
  )
  return {
    slug: letterFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllLetters() {
  let letterFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/letters'),
  })

  let letters = await Promise.all(letterFilenames.map(importLetter))

  return letters.sort((z, a) => new Date(z.date) - new Date(a.date))
}
