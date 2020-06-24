import arg from 'arg'
import process from 'process'
import { createFileSync } from './file-helpers'
import path from 'path'


interface Args {
  paths: string[]
}

export const parseArgs = (rawArgs: string[]): Args => {
  const args = arg(
    {},
    {
      argv: rawArgs.slice(2),
    },
  )
  return { 
    paths: args._
  }
}


export function cli(args: string[]): void {
  const workingDirectory = process.cwd()
  const parsed = parseArgs(args)

  
  parsed.paths.forEach(p => createFileSync(path.join(workingDirectory, p), ''))
}
