import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

const Radial = () => {
    return (
<Svg height="100%" width="100%">
          <Defs>
            <RadialGradient
              id="grad"
              cx="50%"
              cy="50%"
              rx="50%"
              ry="50%"
              fx="50%"
              fy="50%"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <Stop offset="40%" stopColor="#FFDBCF" stopOpacity="1" />
              <Stop offset="100%" stopColor="#F7FAF8" stopOpacity="1" />
            </RadialGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>
    )
}

export default Radial

