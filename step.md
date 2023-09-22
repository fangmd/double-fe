
- init

```
pnpm init
```

- doc: https://pnpm.io/workspaces
- add `pnpm-workspace.yaml`

```
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```

- add `packages/common, packages/antd`
- add `.npmrc`
- add `.gitignore`
- `git init`
- add typescript to workspace-root `pnpm -w add typescript`
- `tsc --init`
- `packages/common/tsconfig.json`

```json
{
    "extends": "../../tsconfig.json",
    "compilerOptions": {
        "outDir": "dist",
        "rootDir": "src"
    },
    "include": [
        "src/**/*"
    ]
}
```

- config: `pnpm --filter @double/prettier-config add -D prettier`
- config: `pnpm --filter @double/tslib-eslint-config add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier`
- changesets docs: `https://pnpm.io/zh/using-changesets`




# tip

- 运行子仓库命令: `pnpm --filter <package-name> <command>`
