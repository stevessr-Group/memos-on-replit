{ pkgs }: {
  deps = [
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
    pkgs.nodejs
    pkgs.nodePackages.pnpm
    pkgs.vite
    pkgs.nodePackages.typescript
    pkgs.go
    pkgs.gox
  ];
}