import React, { Component } from "react";
import M from "materialize-css";

class Parallax extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div class="parallax-container" style={{ height: "300px" }}>
          <div class="parallax">{/**<img src={image1} /> */}</div>
        </div>
        <div class="section grey darken-4">
          <div class="row container">
            <h3 class="white-text header" style={{ textAlign: "left" }}>
              Who we are
            </h3>
            <p
              class="white-text text-darken-3 lighten-3"
              style={{ textAlign: "left" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              quam lorem, auctor at tempus at, placerat eget nisl. Sed molestie
              a nulla sit amet ornare. Ut eu malesuada felis. Integer augue sem,
              volutpat in consequat at, suscipit pellentesque augue. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Curabitur a nisl
              lacus. Sed a ultricies velit. Curabitur in lectus sit amet orci
              commodo accumsan. Mauris ex tortor, ullamcorper vitae leo vel,
              ultrices lobortis purus. Etiam ut justo eu erat ornare tempor id
              sit amet metus. Curabitur vel lorem vehicula, elementum dolor nec,
              facilisis massa. Pellentesque a gravida enim. Duis a gravida
              mauris, eu aliquam augue. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Curabitur quis eros
              maximus nibh ultricies volutpat. Curabitur enim eros, hendrerit
              eget consequat sed, hendrerit non justo. Pellentesque in nisl quis
              ligula viverra feugiat. Quisque hendrerit mollis quam, sed
              hendrerit odio accumsan eu. Duis ut nunc id lorem malesuada dictum
              ac eu tellus.
            </p>
          </div>
        </div>
        <div class="parallax-container" style={{ height: "300px" }}>
          <div class="parallax">{/**<img src={image1} /> */}</div>
        </div>
        <div class="section grey darken-4">
          <div class="row container">
            <h2 class="white-text header" style={{ textAlign: "left" }}>
              Our Operations
            </h2>
            <p
              class="white-text text-darken-3 lighten-3"
              style={{ textAlign: "left" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              quam lorem, auctor at tempus at, placerat eget nisl. Sed molestie
              a nulla sit amet ornare. Ut eu malesuada felis. Integer augue sem,
              volutpat in consequat at, suscipit pellentesque augue. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Curabitur a nisl
              lacus. Sed a ultricies velit. Curabitur in lectus sit amet orci
              commodo accumsan. Mauris ex tortor, ullamcorper vitae leo vel,
              ultrices lobortis purus. Etiam ut justo eu erat ornare tempor id
              sit amet metus. Curabitur vel lorem vehicula, elementum dolor nec,
              facilisis massa. Pellentesque a gravida enim. Duis a gravida
              mauris, eu aliquam augue. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Curabitur quis eros
              maximus nibh ultricies volutpat. Curabitur enim eros, hendrerit
              eget consequat sed, hendrerit non justo. Pellentesque in nisl quis
              ligula viverra feugiat. Quisque hendrerit mollis quam, sed
              hendrerit odio accumsan eu. Duis ut nunc id lorem malesuada dictum
              ac eu tellus.
            </p>
          </div>
        </div>
        <div class="parallax-container" style={{ height: "300px" }}>
          <div class="parallax">{/**<img src={image1} /> */}</div>
        </div>
      </div>
    );
  }
}

export default Parallax;
