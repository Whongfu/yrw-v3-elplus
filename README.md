## Usage

```bash
git clone https://github.com/Whongfu/yrw-v3-elplus.git
cd yrw-v3-elplus
npm i
npm run dev
```


## package.json

```
dependencies {
    name -- 定义项目的名称，通常全小写并使用短横线连接。
    private -- 可以有效防止意外发布项目到 npm，保证项目的隐私。（如果没有 private: true 且执行了 npm publish 命令，项目会被发布到 npm。设置这个字段可以避免这种意外操作。）
    version -- 项目的版本号，遵循语义化版本控制（semver）规范，如 1.0.0，分别表示主版本、次版本和补丁版本。
    description -- 项目的描述，简要说明项目的目的或功能。
    scripts -- 项目中常用的命令，使用 npm run 或 yarn 运行。
    dependencies -- 运行时依赖，项目在生产环境下需要的库。
    devDependencies -- 开发时依赖，只在开发环境中使用的库。例如构建工具、代码检查工具等
}

devDependencies {
    @types/node -- 在 TypeScript 中，默认情况下，Node.js 的核心模块（如 fs、http、path 等）和全局变量（如 __dirname、process、Buffer 等）是没有类型定义的。为了让 TypeScript 知道这些模块和全局变量的类型，@types/node 提供了相应的类型声明

    @iconify-json/ep -- Iconify 图标库的 Element Plus 图标集

    @vitejs/plugin-vue -- 是一个用于 Vite 的官方插件
        热重载：支持 Vue 3 的热重载功能，确保在开发时可以实时查看更改。
        支持响应式 API：与 Vue 3 的响应式 API 兼容，使得使用 Composition API 更加简便。
        TypeScript 支持：为使用 TypeScript 的项目提供良好的支持。

    eslint -- 是一个用于识别和报告 JavaScript 和 TypeScript 代码中问题的工具，通常用于确保代码质量和一致性。它可以帮助你找到潜在的错误，强制执行编码风格，并确保代码遵循最佳实践。

    sass -- 是一种增强版的 CSS，提供了诸如变量、嵌套、混合、继承等高级功能，帮助开发者编写更加简洁、可维护的样式代码。它有两种语法：缩进式（Sass，扩展名为 .sass）和 SCSS（扩展名为 .scss）， 其中 SCSS 更接近标准的 CSS 语法。
        1. 变量 -- Sass 允许你定义变量，可以用来存储颜色、字体大小等重复使用的值：
            $primary-color: #3498db;
            body {
                color: $primary-color;
            }
        2. 嵌套 -- Sass 支持嵌套，使得样式更加直观、简洁：
            nav {
                ul { li { a {} } }
            }
        3. 混合（Mixins） -- Sass 提供了 @mixin，可以定义一段可重用的样式代码块，随后使用 @include 来调用：
            @mixin flex-center {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .container {
                @include flex-center;
            }
        4. 继承 -- Sass 支持继承样式，使用 @extend 来复用选择器的样式：
            .message {
                padding: 10px;
                border: 1px solid #ccc;
            }
            .success {
                @extend .message;
            }
        5. 条件语句与循环 -- Sass 支持条件语句与循环，让样式更加灵活：

        6. 分片（Partials） -- 可以将样式文件拆分为多个小文件，通过 @import 或 @use 导入：
            文件 -- [ _variables.scss ] -- (Sass 将以 _ 开头的文件视为分片，不会单独编译这些文件，而是需要在其他文件中通过 @import 使用它们。)
            内容 -- $primary-color: #3498db;
            @import 'variables'; -- 引入方式
            body {
                color: $primary-color;
            }
        7. Sass 函数 -- Sass 提供了大量内置函数，允许你操作颜色、字符串、数值等。例如：
            -- 1. 颜色函数 
                    lighten($color，20%) -- 变浅 20% 
                    darken($color, 20%) -- 变深 20%
                    raba($color, 0.5) -- 透明度 50%
                    mix($color1, $color2, 50%) -- 平均混合, 过渡色 
            -- 2. 数值函数
                    percentage(0.5) -- 单位值转换为百分比 50%
                    round(1.6) -- 四舍五入 2
                    ceil(1.6) -- 向上取整 2
                    floor(1.6) -- 向下取整 1
            -- 3. 字符串函数
                to-upper-case -- 大写
                to-lower-case -- 小写
                str-length -- 获取字符串长度
                quote -- 添加引号
                unquote -- 移除引号
            -- 4. 列表函数
                -- $list: 10px 20px 30px
                nth($list, 2) -- 获取列表中的第 N 个元素 20px
                -- $list1: 1px solid
                -- $list2: red
                join($list1, $list2) -- 连接两个列表 1px solid red
                length -- 获取列表长度
            -- 5. Map（映射）函数
                map-get -- 获取Map中某个键的值
                map-merge -- 合并两个Map
            -- 6. 自定义函数
                @function double($value) {
                    @return $value * 2;
                }
                .container {
                    width: double(10px); // 结果为 20px
                }
            -- 7. 控制流函数
                if 条件判断
                -- $theme: dark;
                .container {
                    background-color: if($theme == dark, black, white); // 根据条件设置背景颜色
                }

    typescript -- JavaScript 的超集，添加了静态类型检查和其他增强功能，使得 JavaScript 代码更加健壮和易于维护。
        1、类型检查：TypeScript 强制类型定义，可以在编写代码时发现潜在错误。
        2、提升开发效率：静态类型帮助 IDE 提供更好的代码补全和提示。
        3、ESNext 特性：支持最新的 ECMAScript 特性，比如 async/await、装饰器等，并可以编译为 ES5/ES6，以便兼容旧环境。
        4、大型项目的可维护性：TypeScript 对代码重构支持更好，有助于管理大型项目。

    unocss -- 功能强大的原子化 CSS 引擎，提供了极简的 CSS 编写方式
        1、极简配置：可以通过极少的配置或无需配置来使用。
        2、按需生成：只生成你使用的 CSS，保持生成的 CSS 文件非常小。
        3、支持原子化 CSS：类似 Tailwind 的实用类，但更加灵活。
        4、框架无关：可以在 Vue、React、Svelte 等任何框架中使用。
        5、支持自定义规则：可以根据项目需求自定义原子化类。
        6、支持 Windi CSS 和 Tailwind CSS 的语法：即使你使用过这些框架，切换到 UnoCSS 也十分容易。

    unplugin-vue-components -- 用于Vue项目的插件，旨在自动按需导入Vue组件

    vite -- 现代前端构建工具，专为提高开发速度和打包效率而设计

    vite-ssg -- 基于 Vite 构建的静态站点生成器（SSG，Static Site Generator），用于将 Vue 3 项目预渲染成静态 HTML 文件，以便在部署时提高性能和 SEO（搜索引擎优化）。它允许你将 Vue 应用程序中的路由预渲染成静态页面，同时仍然保留客户端功能

    vite-tsc -- 是 Vue 3 项目中确保 TypeScript 类型安全的强大工具，能够检测项目中所有 .vue 文件的类型问题
}
```

## tsconfig.json

```
compilerOptions {
    target: 指定编译后的 JavaScript 版本，ESNext 是一个适合现代浏览器和 Node.js 的选项。
    module: 指定模块系统，Vue 3 项目使用 Vite，推荐 ESNext。
    moduleResolution: node 方式用于 Node.js 风格的模块解析。
    strict: 开启严格的类型检查，可以让你的代码更健壮。
    jsx: 如果使用 JSX，则设置为 preserve 以保留 JSX 语法。
    esModuleInterop 和 allowSyntheticDefaultImports: 这些选项帮助更好地与 CommonJS 模块兼容。
    sourceMap: 生成调试用的 .map 文件。
    resolveJsonModule: 允许导入 JSON 文件。
    isolatedModules: 防止文件包含无法导入的模块，确保每个文件都是独立模块。
    skipLibCheck: 跳过库的类型检查以提升编译速度。
    lib: 定义编译时使用的环境，esnext 适用于现代浏览器，dom 包含浏览器相关的类型。
    baseUrl 和 paths: 配置路径别名，方便项目中使用绝对路径。
    types: 包含 Vite 的客户端类型声明。
}

vueCompilerOptions { -- 用于配置 Vue 特定编译选项
    isCustomElement: 用于定义哪些标签应被视为自定义元素，而不是 Vue 组件。例如，如果你的项目中使用了自定义 HTML 标签（如 Web Components），可以通过此函数告诉 Vue 编译器忽略这些标签的处理。
    target: 指定 Vue 版本。3 是 Vue 3，2 是 Vue 2。通常对于 Vue 3 项目，设置为 3。
    experimentalResolveStyleCssClasses: 启用对 CSS 类名的解析，这可以在模板中根据类名动态处理样式。这个选项是实验性的，但在某些情况下可能非常有用。
    experimentalUseInlineTemplate: 启用内联模板的支持，用于将模板直接编写在 <script setup> 中，而不是使用单独的模板块。
}

include -- 包含项目中 TypeScript 和 Vue 文件

exclude -- 排除编译输出目录
```