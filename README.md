# 🌈 Gradgen

> Dynamic Gradient Badges

**Gradgen** is a simple yet powerful [Cloudflare worker](https://github.com/bokub/gradgen/blob/master/index.js) that enhances your badges from [badgen.net](https://badgen.net/help) with stunning gradients.

Powered by the [gradient-badge](https://github.com/bokub/gradient-badge) library, Gradgen allows you to easily apply custom gradient effects to any badge with just a URL tweak.

## Usage

Using Gradgen is super easy

1. Head to [badgen.net](https://badgen.net/help) and generate the badge of your choice
2. Swap out the `badgen.net` in the URL with `gradgen.bokub.workers.dev`
3. Add a `gradient` query parameter with your desired colors, formatted as a comma-separated list of hex codes or [color names](https://github.com/badgen/badgen/blob/master/src/color-presets.ts)

**Optional:** Add `&style=flat` for a sleek, flat design.

## Examples

| &nbsp;&nbsp;Description&nbsp;&nbsp; | URL                                                                                             | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------: |
| Original Badge                      | `https://badgen.net/github/checks/nodejs/node`                                                  |                          [![Original badge][original]][original]                           |
| With gradient                       | `https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=red,yellow`               |                           [![With gradient][gradient]][gradient]                           |
| Flat badge                          | `https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=b65cff,11cbfa&style=flat` |                                [![Flat badge][flat]][flat]                                 |

[original]: https://badgen.net/github/checks/nodejs/node
[gradient]: https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=red,yellow
[flat]: https://gradgen.bokub.workers.dev/github/checks/nodejs/node?gradient=b65cff,11cbfa&style=flat
