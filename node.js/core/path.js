const path = require("path");

path.basename("/foo/bar/baz/asdf/quux.html"); // 'quux.html' - Get the last part of a path.

path.dirname("/foo/bar/baz/asdf/quux.html"); // '/foo/bar/baz/asdf' - Get the directory name of a path.

path.extname("index.html"); // '.html' - Get the extension of a file.

path.join("/foo", "bar", "baz/asdf", "quux"); // '/foo/bar/baz/asdf/quux' - Join all arguments together and normalize the resulting path.

path.resolve("foo/bar", "/tmp/file/", "..", "a/../subfile"); // Resolves to an absolute path.

path.normalize("/foo/bar//baz/asdf/quux/.."); // '/foo/bar/baz/asdf' - Normalize a path, removing '..' and '.' segments.

path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb"); // Returns the relative path from the first path to the second.

path.isAbsolute("/foo/bar"); // true - Check if path is an absolute path.

path.parse("/home/user/dir/file.txt"); // Parse a path to an object.

path.format({
    dir: "/home/user/dir",
    base: "file.txt",
}); // Format from an object to a path string.

path.sep; // Get the platform-specific path segment separator: '\\' or '/'.

path.delimiter; // Get the platform-specific path delimiter: ';' or ':'.

path.posix; // Provides access to POSIX specific methods.

path.win32; // Provides access to Windows specific methods.
