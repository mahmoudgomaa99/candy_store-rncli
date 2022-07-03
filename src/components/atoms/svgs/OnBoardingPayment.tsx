import * as React from "react";
import Svg, { Path, Rect, Circle, G, Ellipse } from "react-native-svg";
import useSvgSize from "../../../hooks/useSvgSize";
import { TSvgProps } from "../Svg";

const WIDTH = 500;
const HEIGHT = 500;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} {...props}>
      <Path d="M0 327.45H500V327.7H0z" fill="#e6e6e6" />
      <Path
        d="M343.26 338.04H377.65999999999997V338.29H343.26z"
        fill="#e6e6e6"
      />
      <Path d="M91.68 338.16H111.04V338.41H91.68z" fill="#e6e6e6" />
      <Path d="M211.76 337.58H251V337.83H211.76z" fill="#e6e6e6" />
      <Path d="M193.22 334.02H210.76V334.27H193.22z" fill="#e6e6e6" />
      <Path d="M371.57 334.14H424.56V334.39H371.57z" fill="#e6e6e6" />
      <Path
        d="M237 337.8H43.91a5.71 5.71 0 01-5.7-5.71V60.66a5.71 5.71 0 015.7-5.66H237a5.71 5.71 0 015.71 5.71v271.38a5.71 5.71 0 01-5.71 5.71zM43.91 55.2a5.46 5.46 0 00-5.45 5.46v271.43a5.46 5.46 0 005.45 5.46H237a5.47 5.47 0 005.46-5.46V60.66A5.47 5.47 0 00237 55.2zM453.31 337.8h-193.1a5.72 5.72 0 01-5.71-5.71V60.66a5.72 5.72 0 015.71-5.66h193.1a5.71 5.71 0 015.69 5.66v271.43a5.71 5.71 0 01-5.69 5.71zM260.21 55.2a5.47 5.47 0 00-5.46 5.46v271.43a5.47 5.47 0 005.46 5.46h193.1a5.47 5.47 0 005.46-5.46V60.66a5.47 5.47 0 00-5.46-5.46z"
        transform="translate(0 -54.95)"
        fill="#e6e6e6"
      />
      <Path
        d="M286.75 18.68H423.03V177.48000000000002H286.75z"
        fill="#e0e0e0"
      />
      <Path
        d="M288.48 18.68H426.73V177.48000000000002H288.48z"
        fill="#f5f5f5"
      />
      <Path d="M286.75 177.47H423.03V186.37H286.75z" fill="#e0e0e0" />
      <Path
        d="M313.52 177.47H443.66999999999996V186.37H313.52z"
        fill="#f5f5f5"
      />
      <Path
        transform="rotate(90 385.085 125.555)"
        d="M284.94 89.09H430.27V216.97H284.94z"
        fill="#fafafa"
      />
      <Path
        d="M312.06 170.74L342.5 25.41 382.4 25.41 351.96 170.74 312.06 170.74z"
        fill="#fff"
      />
      <Path
        d="M358.42 170.74L388.85 25.41 406.87 25.41 376.44 170.74 358.42 170.74z"
        fill="#fff"
      />
      <Path
        d="M282.86 73.4v56.54h15s26.87-17.53 33-53.6a6 6 0 00-5.9-7h-38a4.07 4.07 0 00-4.1 4.06zM282.86 220.57V134.5h15s8.6 17.38 17.17 37.36a34.94 34.94 0 01-32.13 48.71z"
        transform="translate(0 -54.95)"
        fill="#e0e0e0"
      />
      <Rect
        x={281.91}
        y={74.99}
        width={16.97}
        height={4.56}
        rx={1.5}
        fill="#f5f5f5"
      />
      <Path
        d="M431 73.4v56.54h-15s-26.88-17.53-33-53.6a6 6 0 015.89-7h38A4.07 4.07 0 01431 73.4zM431.1 220.59v-86.07h-15s-8.6 17.37-17.18 37.36a35 35 0 0032.14 48.71z"
        transform="translate(0 -54.95)"
        fill="#e0e0e0"
      />
      <Rect
        x={414.95}
        y={129.94}
        width={16.97}
        height={4.56}
        rx={1.5}
        transform="rotate(180 423.435 104.745)"
        fill="#f5f5f5"
      />
      <Path
        d="M140.86 88.64H200.89000000000001V154.35H140.86z"
        fill="#e0e0e0"
      />
      <Path d="M144.11 88.64H209.33V154.35H144.11z" fill="#fafafa" />
      <Path
        transform="rotate(90 204.195 148.975)"
        d="M150.59 150.57H202.85V202.34H150.59z"
        fill="#fff"
      />
      <Path
        d="M163 176.45a12.35 12.35 0 0112.35-12.34h2.78a12.35 12.35 0 0112.34 12.34 12.34 12.34 0 01-12.34 12.34h-2.78A12.34 12.34 0 01163 176.45z"
        transform="translate(0 -54.95)"
        fill="#f5f5f5"
      />
      <Path
        d="M92.24 159.27a31.48 31.48 0 110-63h5.69v63z"
        transform="translate(0 -54.95)"
        fill="#e0e0e0"
      />
      <Circle cx={97.93} cy={72.84} r={31.48} fill="#fafafa" />
      <Circle cx={97.93} cy={72.84} r={23.74} fill="#fff" />
      <Path
        d="M107.71 81.72L96.05 73.58 99.75 55.6 103.05 56.28 99.8 72.09 109.64 78.95 107.71 81.72z"
        fill="#e0e0e0"
      />
      <Path
        d="M309.43 215.05H352.34000000000003V330.99H309.43z"
        fill="#e0e0e0"
      />
      <Path
        d="M340.88 330.99L352.34 330.99 352.34 311.79 328.87 311.79 340.88 330.99z"
        fill="#fafafa"
      />
      <Path d="M52.18 215.05H95.09V330.99H52.18z" fill="#e0e0e0" />
      <Path d="M85.09 215.05H352.35V324.38H85.09z" fill="#fafafa" />
      <Path
        d="M96.55 330.99L85.09 330.99 85.09 311.79 108.56 311.79 96.55 330.99z"
        fill="#fafafa"
      />
      <Path d="M93.98 224.45H343.46V264.69H93.98z" fill="#f0f0f0" />
      <Path d="M93.98 274.42H343.46V314.66H93.98z" fill="#f0f0f0" />
      <Path d="M93.98 224.45H306.88V264.69H93.98z" fill="#e0e0e0" />
      <Path
        d="M159.54 284.83h-12.95s2.25 7.77 2.25 12.34-9.85 22.48 4.23 22.48 4.22-17.91 4.22-22.48 2.25-12.34 2.25-12.34z"
        transform="translate(0 -54.95)"
        fill="#fafafa"
      />
      <Path
        d="M108.56 298.33v7.07c0 7.84 7.58 14.25 16.84 14.25h8.35c9.26 0 16.84-6.41 16.84-14.25v-7.07z"
        transform="translate(0 -54.95)"
        fill="#f0f0f0"
      />
      <Path d="M93.98 274.42H306.88V314.66H93.98z" fill="#e0e0e0" />
      <Path
        transform="rotate(180 223.515 324.8)"
        d="M213.54 335.67H233.48V368.88H213.54z"
        fill="#fff"
      />
      <Path
        transform="rotate(180 231.06 325.32)"
        d="M230.38 336.19H231.74V369.4H230.38z"
        fill="#e6e6e6"
      />
      <Rect
        x={231.36}
        y={335.94}
        width={4.44}
        height={33.72}
        rx={0.48}
        transform="rotate(180 233.58 325.32)"
        fill="#ebebeb"
      />
      <Path
        transform="rotate(180 233.58 320.1)"
        d="M231.36 343.64H235.8V351.52H231.36z"
        fill="#fff"
      />
      <Path
        transform="rotate(180 233.58 328.895)"
        d="M231.36 353.94H235.8V358.8H231.36z"
        fill="#fff"
      />
      <Rect
        x={212.06}
        y={335.94}
        width={18.93}
        height={33.72}
        rx={0.48}
        transform="rotate(180 221.52 325.32)"
        fill="#ebebeb"
      />
      <Path
        transform="rotate(180 214.825 323.01)"
        d="M203.83 332.17H225.83V368.81H203.83z"
        fill="#fff"
      />
      <Path
        transform="rotate(180 223.15 323.58)"
        d="M222.4 332.74H223.89000000000001V369.38H222.4z"
        fill="#e6e6e6"
      />
      <Rect
        x={223.48}
        y={332.46}
        width={4.9}
        height={37.2}
        rx={0.53}
        transform="rotate(180 225.93 323.58)"
        fill="#f0f0f0"
      />
      <Path
        transform="rotate(180 225.93 317.465)"
        d="M223.48 344.31H228.38V345.58H223.48z"
        fill="#fff"
      />
      <Path
        transform="rotate(180 225.93 321.14)"
        d="M223.48 347.98H228.38V349.25H223.48z"
        fill="#fff"
      />
      <Path
        transform="rotate(180 225.93 324.815)"
        d="M223.48 351.66H228.38V352.93H223.48z"
        fill="#fff"
      />
      <Rect
        x={202.19}
        y={332.46}
        width={20.88}
        height={37.2}
        rx={0.53}
        transform="rotate(180 212.625 323.58)"
        fill="#f0f0f0"
      />
      <Path
        d="M176.72 356.89a5.64 5.64 0 11-5.64-5.63 5.64 5.64 0 015.64 5.63z"
        transform="translate(0 -54.95)"
        fill="#fafafa"
      />
      <Path
        d="M167.11 359.58a4.41 4.41 0 11-4.41-4.41 4.42 4.42 0 014.41 4.41zM186.37 359.58a5.64 5.64 0 11-5.64-5.64 5.65 5.65 0 015.64 5.64z"
        transform="translate(0 -54.95)"
        fill="#fafafa"
      />
      <Path
        d="M195.61 357.93a5.64 5.64 0 11-5.64-5.64 5.64 5.64 0 015.64 5.64z"
        transform="translate(0 -54.95)"
        fill="#fafafa"
      />
      <Path
        d="M147.18 358.66s.77 11 30.44 11 30.44-11 30.44-11z"
        transform="translate(0 -54.95)"
        fill="#f5f5f5"
      />
      <Path
        d="M230.38 308.65s1.23 11 48.25 11 48.24-11 48.24-11z"
        transform="translate(0 -54.95)"
        fill="#fff"
      />
      <G>
        <Ellipse cx={250} cy={361.29} rx={193.89} ry={11.32} fill="#f5f5f5" />
      </G>
      <G>
        <Circle
          cx={108.63}
          cy={228.03}
          r={54.16}
          transform="rotate(-45 42.295 200.56)"
          fill="#ff5964"
        />
        <Circle
          cx={108.63}
          cy={228.03}
          r={54.16}
          transform="rotate(-45 42.295 200.56)"
          opacity={0.4}
        />
        <Circle
          cx={108.63}
          cy={228.03}
          r={45.48}
          transform="rotate(-80.32 76.07 200.555)"
          opacity={0.2}
        />
        <Circle
          cx={111.5}
          cy={229.83}
          r={43.66}
          transform="rotate(-86 82.002 201.922)"
          fill="#ff5964"
        />
        <Circle
          cx={111.5}
          cy={229.83}
          r={43.66}
          transform="rotate(-86 82.002 201.922)"
          opacity={0.4}
        />
        <Path
          d="M126.61 223.86l2.85 12.35A3.51 3.51 0 01129 239a3.67 3.67 0 01-2.33 1.65l-10.86 2.51 2 8.69a3.47 3.47 0 01-.48 2.77 3.51 3.51 0 01-2.33 1.58 3.68 3.68 0 01-2.83-.44 3.48 3.48 0 01-1.64-2.28l-2-8.79-10.77 2.49a3.54 3.54 0 01-2.74-.46 3.5 3.5 0 01-1.65-2.28 3.56 3.56 0 01.46-2.76 3.5 3.5 0 012.28-1.63l25.2-5.81-1.18-5.13L95 234.9a3.55 3.55 0 01-2.76-.43 3.5 3.5 0 01-1.63-2.31l-2.84-12.3a3.66 3.66 0 012.74-4.39l10.72-2.47-2-8.7a3.55 3.55 0 01.42-2.73 3.59 3.59 0 012.44-1.68 3.51 3.51 0 012.73.46 3.57 3.57 0 011.62 2.29l2 8.69 11-2.52a3.63 3.63 0 012.81.47 3.48 3.48 0 011.66 2.25 3.79 3.79 0 01-2.81 4.49l-25.2 5.81 1.1 5.1 25.11-5.79a3.63 3.63 0 012.81.47 3.45 3.45 0 011.69 2.25z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <G opacity={0.7000000000000001}>
          <Path
            d="M126.61 223.86l2.85 12.35A3.51 3.51 0 01129 239a3.67 3.67 0 01-2.33 1.65l-10.86 2.51 2 8.69a3.47 3.47 0 01-.48 2.77 3.51 3.51 0 01-2.33 1.58 3.68 3.68 0 01-2.83-.44 3.48 3.48 0 01-1.64-2.28l-2-8.79-10.77 2.49a3.54 3.54 0 01-2.74-.46 3.5 3.5 0 01-1.65-2.28 3.56 3.56 0 01.46-2.76 3.5 3.5 0 012.28-1.63l25.2-5.81-1.18-5.13L95 234.9a3.55 3.55 0 01-2.76-.43 3.5 3.5 0 01-1.63-2.31l-2.84-12.3a3.66 3.66 0 012.74-4.39l10.72-2.47-2-8.7a3.55 3.55 0 01.42-2.73 3.59 3.59 0 012.44-1.68 3.51 3.51 0 012.73.46 3.57 3.57 0 011.62 2.29l2 8.69 11-2.52a3.63 3.63 0 012.81.47 3.48 3.48 0 011.66 2.25 3.79 3.79 0 01-2.81 4.49l-25.2 5.81 1.1 5.1 25.11-5.79a3.63 3.63 0 012.81.47 3.45 3.45 0 011.69 2.25z"
            transform="translate(0 -54.95)"
            fill="#fff"
          />
        </G>
        <Circle
          cx={195.33}
          cy={160.54}
          r={37.8}
          transform="rotate(-49.8 136.16 133.078)"
          fill="#ff5964"
        />
        <Circle
          cx={195.33}
          cy={160.54}
          r={37.8}
          transform="rotate(-49.8 136.16 133.078)"
          opacity={0.4}
        />
        <Circle
          cx={195.33}
          cy={160.54}
          r={31.74}
          transform="rotate(-50.42 136.96 133.061)"
          opacity={0.2}
        />
        <Circle
          cx={196.54}
          cy={162.57}
          r={30.47}
          transform="rotate(-52.61 140.975 135.1)"
          fill="#ff5964"
        />
        <Circle
          cx={196.54}
          cy={162.57}
          r={30.47}
          transform="rotate(-52.61 140.975 135.1)"
          opacity={0.4}
        />
        <Path
          d="M207.82 163.66l-2.15 8.58a2.41 2.41 0 01-1.18 1.55 2.58 2.58 0 01-2 .29l-7.49-1.89-1.52 6a2.42 2.42 0 01-1.18 1.56 2.46 2.46 0 01-1.92.29 2.57 2.57 0 01-1.61-1.17 2.46 2.46 0 01-.3-1.94l1.53-6.1-7.5-1.83a2.47 2.47 0 01-1.56-1.16 2.43 2.43 0 01-.3-1.93 2.46 2.46 0 011.16-1.58 2.49 2.49 0 011.94-.28l17.5 4.39.9-3.56-17.45-4.38a2.43 2.43 0 01-1.57-1.15 2.39 2.39 0 01-.28-1.94l2.14-8.55a2.54 2.54 0 013.1-1.85l7.42 1.86 1.52-6a2.51 2.51 0 013.18-1.87 2.39 2.39 0 011.54 1.15 2.47 2.47 0 01.29 1.93l-1.52 6 7.6 1.91a2.53 2.53 0 011.6 1.19 2.44 2.44 0 01.32 1.92 2.58 2.58 0 01-1.2 1.6 2.55 2.55 0 01-2 .3l-17.51-4.39-.88 3.54 17.44 4.37a2.53 2.53 0 011.6 1.19 2.39 2.39 0 01.34 1.95z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <G opacity={0.7000000000000001}>
          <Path
            d="M207.82 163.66l-2.15 8.58a2.41 2.41 0 01-1.18 1.55 2.58 2.58 0 01-2 .29l-7.49-1.89-1.52 6a2.42 2.42 0 01-1.18 1.56 2.46 2.46 0 01-1.92.29 2.57 2.57 0 01-1.61-1.17 2.46 2.46 0 01-.3-1.94l1.53-6.1-7.5-1.83a2.47 2.47 0 01-1.56-1.16 2.43 2.43 0 01-.3-1.93 2.46 2.46 0 011.16-1.58 2.49 2.49 0 011.94-.28l17.5 4.39.9-3.56-17.45-4.38a2.43 2.43 0 01-1.57-1.15 2.39 2.39 0 01-.28-1.94l2.14-8.55a2.54 2.54 0 013.1-1.85l7.42 1.86 1.52-6a2.51 2.51 0 013.18-1.87 2.39 2.39 0 011.54 1.15 2.47 2.47 0 01.29 1.93l-1.52 6 7.6 1.91a2.53 2.53 0 011.6 1.19 2.44 2.44 0 01.32 1.92 2.58 2.58 0 01-1.2 1.6 2.55 2.55 0 01-2 .3l-17.51-4.39-.88 3.54 17.44 4.37a2.53 2.53 0 011.6 1.19 2.39 2.39 0 01.34 1.95z"
            transform="translate(0 -54.95)"
            fill="#fff"
          />
        </G>
      </G>
      <G>
        <Path d="M102.26 334.02H103.26V345.31H102.26z" fill="#ff5964" />
        <Path d="M102.26 334.02H103.26V345.31H102.26z" opacity={0.1} />
        <Path d="M396.74 244.57H397.74V260.04H396.74z" fill="#ff5964" />
        <Path d="M396.74 268.16H397.74V276.55H396.74z" fill="#ff5964" />
        <Path d="M396.74 244.57H397.74V260.04H396.74z" opacity={0.1} />
        <Path d="M396.74 268.16H397.74V276.55H396.74z" opacity={0.1} />
        <Rect
          x={105.76}
          y={177.49}
          width={288.49}
          height={181.35}
          rx={15.05}
          fill="#ff5964"
        />
        <Rect
          x={105.76}
          y={177.49}
          width={288.49}
          height={181.35}
          rx={15.05}
          opacity={0.2}
        />
        <Path
          d="M347.55 295.59a18.67 18.67 0 000-37.34h-24.1a18.67 18.67 0 000 37.34z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <Rect
          x={133.79}
          y={240.63}
          width={57.43}
          height={42.03}
          rx={6.48}
          fill="#ff5964"
        />
        <Rect
          x={133.79}
          y={240.63}
          width={57.43}
          height={42.03}
          rx={6.48}
          fill="#fff"
          opacity={0.30000000000000004}
        />
        <Rect
          x={133.79}
          y={198.71}
          width={86.31}
          height={9.17}
          rx={4.59}
          fill="#ff5964"
        />
        <Rect
          x={133.79}
          y={198.71}
          width={86.31}
          height={9.17}
          rx={4.59}
          fill="#fff"
          opacity={0.30000000000000004}
        />
        <Rect
          x={133.79}
          y={303.52}
          width={48.15}
          height={19.75}
          rx={6.73}
          fill="#ff5964"
        />
        <Rect
          x={133.79}
          y={303.52}
          width={48.15}
          height={19.75}
          rx={6.73}
          fill="#fff"
          opacity={0.30000000000000004}
        />
        <Rect
          x={195.21}
          y={303.52}
          width={48.15}
          height={19.75}
          rx={6.73}
          fill="#ff5964"
        />
        <Rect
          x={195.21}
          y={303.52}
          width={48.15}
          height={19.75}
          rx={6.73}
          fill="#fff"
          opacity={0.30000000000000004}
        />
        <Rect
          x={256.64}
          y={303.52}
          width={48.15}
          height={19.75}
          rx={6.73}
          fill="#ff5964"
        />
        <Rect
          x={256.64}
          y={303.52}
          width={48.15}
          height={19.75}
          rx={6.73}
          fill="#fff"
          opacity={0.30000000000000004}
        />
        <Rect
          x={318.06}
          y={303.52}
          width={48.15}
          height={19.75}
          rx={6.73}
          fill="#ff5964"
        />
        <Rect
          x={318.06}
          y={303.52}
          width={48.15}
          height={19.75}
          rx={6.73}
          fill="#fff"
          opacity={0.30000000000000004}
        />
      </G>
      <G>
        <Path
          d="M293 166.82c-2.37 6.69-5 13.16-7.79 19.63a168.66 168.66 0 01-9.7 19.14c-.49.79-1 1.58-1.53 2.37l-.39.59-.53.73c-.36.46-.7.86-1 1.25a52.21 52.21 0 01-4 4c-2.67 2.47-5.39 4.71-8.14 6.92-5.52 4.38-11.16 8.48-17 12.37l-3.49-4.33 14.7-14.49c2.43-2.41 4.84-4.84 7.09-7.27 1.11-1.21 2.19-2.45 3.08-3.59.22-.28.41-.56.58-.8l.21-.34.29-.52c.39-.69.8-1.36 1.18-2.07 3.06-5.75 5.76-12 8.36-18.34s5.1-12.73 7.5-19.07z"
          transform="translate(0 -54.95)"
          fill="#e4897b"
        />
        <Path
          d="M295.81 162c2.27 6.64-11.07 26.17-11.07 26.17L272 181.08a149 149 0 017.68-17.8c4.46-8.44 13.64-8.57 16.13-1.28z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <Path
          d="M295.81 162c2.27 6.64-11.07 26.17-11.07 26.17L272 181.08a149 149 0 017.68-17.8c4.46-8.44 13.64-8.57 16.13-1.28z"
          transform="translate(0 -54.95)"
          fill="#fff"
          opacity={0.7000000000000001}
        />
        <Path
          d="M296 162.83c-2.86-1.37-6.15-.22-9.62 5.26s-6.42 14.63-6.74 17.24l5.11 2.83s12.31-18.04 11.25-25.33z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
          opacity={0.31}
        />
        <Path
          d="M287.18 156.92s-9.52 22.39-2.66 64.08h39.65c.49-6.09-2.31-35.78 4.56-64.46a101.24 101.24 0 00-13.22-1.68 147.9 147.9 0 00-16.85 0 76.45 76.45 0 00-11.48 2.06z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <Path
          d="M287.18 156.92s-9.52 22.39-2.66 64.08h39.65c.49-6.09-2.31-35.78 4.56-64.46a101.24 101.24 0 00-13.22-1.68 147.9 147.9 0 00-16.85 0 76.45 76.45 0 00-11.48 2.06z"
          transform="translate(0 -54.95)"
          fill="#fff"
          opacity={0.7000000000000001}
        />
        <Path
          d="M338.21 343.67L332.34 348.93 321.15 337.29 327.03 332.03 338.21 343.67z"
          fill="#e4897b"
        />
        <Path
          d="M318.08 354.62L310.67 354.62 309.71 337.45 317.12 337.45 318.08 354.62z"
          fill="#e4897b"
        />
        <Path
          d="M321.16 337.29L326.92 343.29 332.8 338.03 327.04 332.03 321.16 337.29z"
          fill="#ce6f64"
        />
        <Path
          d="M317.12 337.46L309.71 337.46 310.21 346.31 317.62 346.31 317.12 337.46z"
          fill="#ce6f64"
        />
        <Path
          d="M284.52 221s-7.81 54.06-10.47 83.48c-2.14 23.61 48.91 94 48.91 94l9.87-9.29s-37.28-63.11-34.41-89.39c2.78-25.45 12.2-78.83 12.2-78.83z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <Path
          d="M284.52 221s-7.81 54.06-10.47 83.48c-2.14 23.61 48.91 94 48.91 94l9.87-9.29s-37.28-63.11-34.41-89.39c2.78-25.45 12.2-78.83 12.2-78.83z"
          transform="translate(0 -54.95)"
          opacity={0.7000000000000001}
        />
        <Path
          d="M298.42 299.83c1.43-13.11 4.63-33.65 7.38-50.47-1.44-2.82-5.48-8.53-5.48-8.53-3.62 12.51-11.49 59.67-.26 123.36 11.7 18.86 22.9 34.32 22.9 34.32l1.53-24.32c-10.81-20.34-28.06-56.19-26.07-74.36z"
          transform="translate(0 -54.95)"
          opacity={0.2}
        />
        <Path
          d="M298.62 221s-.7 56.65.5 77.88c1.31 23.24 7.91 100.24 7.91 100.24h13.58S320.2 324 321 301c.89-25 3.19-80 3.19-80z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <Path
          d="M298.62 221s-.7 56.65.5 77.88c1.31 23.24 7.91 100.24 7.91 100.24h13.58S320.2 324 321 301c.89-25 3.19-80 3.19-80z"
          transform="translate(0 -54.95)"
          opacity={0.7000000000000001}
        />
        <Path
          d="M310.28 408.72h8.33a.53.53 0 01.55.5l.41 6.59a1.31 1.31 0 01-1.3 1.32c-2.9-.05-4.29-.22-7.95-.22-2.25 0-11.83.24-14.94.24s-3-3.08-1.71-3.36c5.91-1.25 13.24-3 15.34-4.62a2.09 2.09 0 011.27-.45z"
          transform="translate(0 -54.95)"
          fill="#263238"
        />
        <Path
          d="M330.72 401.78l7.14-4.81a.66.66 0 01.82 0l5.46 5.51a1.1 1.1 0 01-.26 1.67c-4.56 3.51-7.85 6.16-10.45 9.08-3 3.41-4.62 3.9-11.62 3.9-3.24 0-5.07-2.73-3.75-3.15 11.66-3.69 8.54-5.3 11.38-10.71a4 4 0 011.28-1.49z"
          transform="translate(0 -54.95)"
          fill="#263238"
        />
        <Path
          d="M241.11 228.56l-7.73.27 1.62 6.06s8.08.72 8.8-1.72z"
          transform="translate(0 -54.95)"
          fill="#e4897b"
        />
        <Path
          d="M225.04 177.49L230.46 180.65 235 179.94 233.38 173.88 225.04 177.49z"
          fill="#e4897b"
        />
        <Path
          d="M319.87 163.62c-.82 4.72.27 16 4.32 29.06a190.68 190.68 0 013.89-33.29v-.06c-2.6-.26-7.42-.14-8.21 4.29z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
          opacity={0.31}
        />
        <Path
          d="M314.5 135.88c-1.25 5.42-2.66 15.36 1 19 0 0-1.58 4.49-11.66 4.49-11.08 0-5.19-4.49-5.19-4.49 6.1-1.44 6.1-5.93 5.19-10.14z"
          transform="translate(0 -54.95)"
          fill="#e4897b"
        />
        <Path
          d="M303.56 104.4L300.56 107.59 302.03 110.67 304.42 110.78 306.46 107.84 303.56 104.4z"
          fill="#ff5964"
        />
        <Path
          d="M310.16 139.49l-6.31 5.22a17.35 17.35 0 01.42 3c2.32-.33 5.58-2.87 5.91-5.29a7.88 7.88 0 00-.02-2.93z"
          transform="translate(0 -54.95)"
          fill="#ce6f64"
        />
        <Path
          d="M301.35 117.5c-3.79 1.29-6.82 11.34-2.4 14s9.6-16.45 2.4-14z"
          transform="translate(0 -54.95)"
          fill="#263238"
        />
        <Path
          d="M316.87 130.2c-2.26 7-3.22 11.23-7.78 14.1a9.59 9.59 0 01-14.77-8.38c.09-6.73 3.77-17.09 11.52-18.39a9.71 9.71 0 0111.03 12.67z"
          transform="translate(0 -54.95)"
          fill="#e4897b"
        />
        <Path
          d="M322.47 118.5c-2.26 5.46 3 .9 1.64 7.38-.88 4.22-8.5 14.33-11.44 13.41s-2.91-8.09.84-13.16c2.16-2.91-2.51-6.21-13-5.86s-16.83-5.55-2.89-9.88c0 0-5.14 3-2.09 4 4.32 1.61 31.47-6.83 26.94 4.11z"
          transform="translate(0 -54.95)"
          fill="#263238"
        />
        <Path
          d="M320.47 121c-.11 0 2.35-.61 3.66-5 0 .07-.43 6.54-3.66 5zM300.84 111.36c-6.45 2-3.78 4.25-1.11 4.81l6.12-2.4c-9.3 1.23-5.01-2.41-5.01-2.41z"
          transform="translate(0 -54.95)"
          fill="#263238"
        />
        <Path
          d="M318.11 138.75a7.32 7.32 0 01-5 2.07c-2.47 0-3-2.34-1.67-4.3 1.18-1.76 3.88-3.88 6.06-2.93s2.25 3.55.61 5.16z"
          transform="translate(0 -54.95)"
          fill="#e4897b"
        />
        <Path
          d="M305.48 129.81c-.15.58-.58 1-1 .9s-.57-.63-.42-1.21.58-1 1-.89.57.62.42 1.2zM298.88 128.36c-.15.58-.58 1-1 .9s-.57-.62-.42-1.2.57-1 1-.9.54.62.42 1.2z"
          transform="translate(0 -54.95)"
          fill="#263238"
        />
        <Path
          d="M300.9 129.11a22.57 22.57 0 01-4 4.35 3.42 3.42 0 002.66 1.13z"
          transform="translate(0 -54.95)"
          fill="#de5753"
        />
        <Path
          d="M302 136.7a5.53 5.53 0 01-1.23-.14.18.18 0 01-.13-.21.18.18 0 01.21-.13 5 5 0 004.24-1 .18.18 0 01.25 0 .18.18 0 010 .25 5.08 5.08 0 01-3.34 1.23zM308.1 128.14a.34.34 0 01-.32-.21 2.7 2.7 0 00-1.9-1.61.35.35 0 01-.3-.4.36.36 0 01.4-.3 3.38 3.38 0 012.44 2 .34.34 0 01-.18.46.35.35 0 01-.14.06zM296.65 125.49a.35.35 0 01-.22-.08.36.36 0 01-.05-.5 3.67 3.67 0 012.94-1.37.35.35 0 01.32.38.34.34 0 01-.38.32 2.94 2.94 0 00-2.34 1.12.34.34 0 01-.27.13z"
          transform="translate(0 -54.95)"
          fill="#263238"
        />
        <Path
          d="M330.65 161.65c.78 1.21 1.43 2.28 2.09 3.44s1.29 2.28 1.91 3.44c1.22 2.31 2.37 4.67 3.42 7.08A73.7 73.7 0 01343 191l.1.51.05.25.07.42a11.45 11.45 0 01.13 1.69 14.87 14.87 0 01-.3 2.82 23.81 23.81 0 01-1.46 4.46 47.7 47.7 0 01-4 7.21 84 84 0 01-9.88 12.13l-4.35-3.49c2.42-4.22 4.83-8.6 6.85-12.89a49 49 0 002.54-6.34 14.26 14.26 0 00.58-2.78 4.16 4.16 0 000-.93c0-.09 0-.17-.06-.18s0 0 0-.05l-.06-.2-.12-.41a63.48 63.48 0 00-2.25-6.5c-.88-2.17-1.86-4.33-2.89-6.48s-2.14-4.27-3.28-6.39c-.56-1.06-1.15-2.11-1.74-3.15l-1.76-3z"
          transform="translate(0 -54.95)"
          fill="#e4897b"
        />
        <Path
          d="M307.66 410a2 2 0 01-1.4-.39 1 1 0 01-.22-.94.67.67 0 01.41-.49c.91-.36 3 1.08 3.24 1.24a.16.16 0 01.07.18.17.17 0 01-.13.14 9.5 9.5 0 01-1.97.26zm-.87-1.53a.66.66 0 00-.21 0 .29.29 0 00-.19.24.63.63 0 00.12.62c.34.34 1.31.38 2.64.12a5.94 5.94 0 00-2.36-.97z"
          transform="translate(0 -54.95)"
          fill="#fff"
        />
        <Path
          d="M309.59 409.75h-.09c-.74-.44-1.84-2-1.67-2.8a.66.66 0 01.63-.53.89.89 0 01.73.24c.75.73.58 2.86.58 2.95a.18.18 0 01-.1.14zm-1-3h-.08c-.25 0-.31.15-.33.25-.11.53.62 1.7 1.26 2.24a3.85 3.85 0 00-.48-2.34.53.53 0 00-.38-.15zM325.92 405.8a1.3 1.3 0 01-.54-.1.88.88 0 01-.53-.62.51.51 0 01.11-.49c.67-.81 4.18-.57 4.58-.54a.17.17 0 01.16.13.18.18 0 01-.08.19 9.34 9.34 0 01-3.7 1.43zm2.12-1.46c-1.23 0-2.52.12-2.81.47a.17.17 0 000 .18.53.53 0 00.32.39c.56.23 1.82-.15 3.41-1z"
          transform="translate(0 -54.95)"
          fill="#fff"
        />
        <Path
          d="M329.53 404.4c-1 0-3.25-.77-3.42-1.57 0-.2 0-.48.48-.71 1.72-.81 3.05 1.91 3.11 2a.23.23 0 010 .18.19.19 0 01-.17.1zm-2.31-2.07a1.09 1.09 0 00-.49.11c-.21.1-.31.21-.29.31.1.47 1.72 1.13 2.78 1.27-.32-.54-1.09-1.69-2-1.69z"
          transform="translate(0 -54.95)"
          fill="#fff"
        />
        <Path
          d="M325.34 215.38l-7.34-1.29 3.79 8.55s6.73 0 6.43-3.52z"
          transform="translate(0 -54.95)"
          fill="#e4897b"
        />
        <Path
          d="M312.45 163.43L315.92 170.34 321.75 167.68 317.96 159.14 312.45 163.43z"
          fill="#e4897b"
        />
        <Path
          d="M333.43 333.7L322.36 344.13 318.79 340.3 331.46 328.76 333.43 333.7z"
          fill="#ff5964"
        />
        <Path
          d="M333.43 333.7L322.36 344.13 318.79 340.3 331.46 328.76 333.43 333.7z"
          fill="#fff"
          opacity={0.6000000000000001}
        />
        <Path
          d="M321.15 344.17L306.48 344.17 305.67 339.02 321.86 339.82 321.15 344.17z"
          fill="#ff5964"
        />
        <Path
          d="M321.15 344.17L306.48 344.17 305.67 339.02 321.86 339.82 321.15 344.17z"
          fill="#fff"
          opacity={0.6000000000000001}
        />
        <Path
          d="M328.73 156.54c7 1 14.17 25.32 14.17 25.32l-15 8.32s-6.09-11.56-9-20.14c-3.05-8.99 2.34-14.6 9.83-13.5z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <Path
          d="M328.73 156.54c7 1 14.17 25.32 14.17 25.32l-15 8.32s-6.09-11.56-9-20.14c-3.05-8.99 2.34-14.6 9.83-13.5z"
          transform="translate(0 -54.95)"
          fill="#fff"
          opacity={0.7000000000000001}
        />
        <Path
          d="M303.56 104.4L300.56 107.59 302.03 110.67 304.42 110.78 306.46 107.84 303.56 104.4z"
          opacity={0.2}
        />
        <Path
          d="M302.29 165.07s-5.69 23.57-5.91 28.47c-.31 6.74 2.51 18.25 2.51 18.25s4-9.57 4.82-18.46.21-23.27.58-28.26z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <Path
          d="M302.29 165.07s-5.69 23.57-5.91 28.47c-.31 6.74 2.51 18.25 2.51 18.25s4-9.57 4.82-18.46.21-23.27.58-28.26z"
          transform="translate(0 -54.95)"
          opacity={0.2}
        />
        <Path
          d="M303.56 159.35a13 13 0 011.92 6.11s12.48-4.4 11.89-10.85c0 0-1.77-1.05-2.89-1.9 0 0-.42 4.06-10.92 6.64z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <Path
          d="M303.56 159.35a13 13 0 011.92 6.11s12.48-4.4 11.89-10.85c0 0-1.77-1.05-2.89-1.9 0 0-.42 4.06-10.92 6.64z"
          transform="translate(0 -54.95)"
          fill="#fff"
          opacity={0.6000000000000001}
        />
        <Path
          d="M303.56 159.35a17.56 17.56 0 00-2.44 5.72s-5.65-3.82-3.95-10.19a21.09 21.09 0 013.19-1s-.74 4.12 3.2 5.47z"
          transform="translate(0 -54.95)"
          fill="#ff5964"
        />
        <Path
          d="M303.56 159.35a17.56 17.56 0 00-2.44 5.72s-5.65-3.82-3.95-10.19a21.09 21.09 0 013.19-1s-.74 4.12 3.2 5.47z"
          transform="translate(0 -54.95)"
          fill="#fff"
          opacity={0.6000000000000001}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
