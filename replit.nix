{ pkgs }: {
  deps = [
		pkgs.nodePackages.prettier
    pkgs.vim
    pkgs.nodejs
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}