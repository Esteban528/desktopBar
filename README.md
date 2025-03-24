# run

```bash 
nix run github:Esteban528/desktopBar
```

# install 
as nixos/homeManager package
```nix
# add input to flake
inputs = {
    desktopbar.url = "github:Esteban528/desktopBar";
}

# Home Manager or nixos packages

home.packages = with pkgs;
    [
      inputs.desktopbar.packages.${system}.default
    ];
```
