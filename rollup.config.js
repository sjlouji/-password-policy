import typescript from 'rollup-plugin-typescript';
import gzipPlugin from 'rollup-plugin-gzip'

export default  {
  input: './lib/index.ts',
  plugins: [
    typescript(),
    gzipPlugin()
  ],
  output: [
    { file: 'dist/index.esm.js', format: 'esm' }
  ]
}
