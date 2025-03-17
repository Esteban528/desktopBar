default:
  - nix develop
compile:
  - mkdir -p $out/bin && ags bundle app.ts $out/bin/${name}
build:
  - just compile && just run
run: 
  - ags run $out/bin/${name}

