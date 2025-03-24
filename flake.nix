{
  description = "My Awesome Desktop bar";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    ags = {
      url = "github:aylur/ags";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = {
    self,
    nixpkgs,
    ags,
  }: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
    astallibs = with ags.packages.${system}; [
        astal3
        tray
        io
        wireplumber 
        network
        mpris
        pkgs.wrapGAppsHook
        pkgs.gobject-introspection
        pkgs.libsoup_3
        pkgs.brightnessctl
      ];
      ags_package = (
        ags.packages.${system}.ags.override {
          extraPackages = astallibs;
        }
      );
  in {
    packages.${system} = {
      default = ags.lib.bundle {
        inherit pkgs;
        src = ./.;
        name = "DesktopBar";
        entry = "app.ts";

        extraPackages = astallibs;
      };
      ags_bin = ags_package;
    };

      devShells.${system} = {
        default = pkgs.mkShellNoCC {
          nativeBuildInputs = [
            ags_package
          ];

        };
      };
    };
}
