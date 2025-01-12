# Gpu-Accelerated ByteBeat Renderer
Imagine [CABBR](https://github.com/cabfile/cabbr) but instead of using the CPU, it used the GPU. Yeah. That's what this is.

Note that this is more of a fun experiment than something that should be used seriously.

# How to use
Make sure you have Node.JS and NPM (or any other compatible package manager) installed.

Download the repository and extract it somewhere. People that have `git` installed can just do `git clone https://github.com/cabfile/gabbr.git .`

Now install [GPU.js](https://gpu.rocks/) by doing `npm i gpu.js`.

If it installs successfully, you can configure the renderer in the script file itself. You can change how long the resulting audio will be and at what sample rate it will be played.

Make a text file named expr.txt, and put your expression there. Now run the renderer (with `node gabbr`), and a file named out.wav should appear.
# Limitations
When putting expressions in, imagine you're putting them into a Shadertoy shader. In other words:
* If an expression uses the `?` and `:` operators, you will very likely have to modify it for it to work. For example: `t*(t&4096?2:1)` -> `t*((t&4096)!=0?2:1)`
* Classic C expressions usually require the least amount of effort to get working
