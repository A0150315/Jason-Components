import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import sass from 'node-sass'
import fs from 'fs'
import path from 'path'

const componentDir = 'src/components';
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const cModuleMap = cModuleNames.filter(name =>
    !/(.ts|.tsx)$/.test(name)
).reduce((prev, name) => {
    prev[name] = `${componentDir}/${name}/index.tsx`;

    return prev;
}, {});

let override = { compilerOptions: { declaration: true, allowJs: false, isolatedModules: false } };

const rollupConfig = {
    experimentalCodeSplitting: true,
    external: id => ['react'].some(e => id.indexOf(e) === 0),
    plugins: [
        typescript({
            // tsconfigDefaults: defaults,
            tsconfig: "tsconfig.json",
            tsconfigOverride: override
        }),
        resolve(),
        commonjs({
            extensions: ['.js', '.ts', '.jsx', '.tsx'],
            include: [
                'node_modules/**'
            ],
            exclude: [
                'node_modules/process-es6/**'
            ],
            namedExports: {
                'node_modules/react/index.js': ['useState', 'useRef', 'useCallback', 'useMemo', 'useEffect', 'memo'],
                'node_modules/react-dom/index.js': ['render']
            }
        }),
        postcss({
            // extract: true,
            minimize: 'production',
            extensions: ['css', 'scss'],
            process: (context) => {
                console.log(context)
                return new Promise((resolve, reject) => {
                    sass.render({
                        file: context
                    }, function (err, result) {
                        if (!err) {
                            resolve(result);
                        } else {
                            reject(err)
                        }
                    });
                })
            },
        }),
    ]
}

export default [{
    input: { index: "src/components/index.ts" },
    output: {
        dir: 'es',
        format: 'es',
        entryFileNames: 'components/index.js', // 输出文件名
        exports: 'named'
    },
    ...rollupConfig
}, {
    input: cModuleMap,
    output: {
        dir: 'es',
        format: 'es',
        entryFileNames: 'components/[name]/index.js', // 输出文件名
        exports: 'named'
    },
    ...rollupConfig
}]