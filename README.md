#OblivionJS

OblivionJS is a virtual machine written in TypeScript. The VM is primarily being developed for the [Oblivion Language](https://jweinst1.gitbooks.io/the-oblivion-language/content/). However, the VM can be used for the implementation of other languages. OblivionJS uses simple, straight forward sets of opcodes, as opposed to non-readable sets of bytecodes. This way, compilers can output an ASCII string containing the opcodes, instead of containers of bytes.

###Op Code Format

The Op codes for OblivionJS follow a three character format, followed by a `->` seperator, and then the corrseponding value associated with the code. Each opcode is sepereate by a white space. Here are the basic arithmetic codes:

```
int........creates an integer
add........increments the integer by a number
sub........decrements the integer by a number
mul........multiplies the integer by a number
div........divides the integer by a number
rem........sets the integer equal to the modulo remainder by a number
```

So here is an example:

```
int->4 add->3 mul->2

This assembles the integer 14.
```
 
