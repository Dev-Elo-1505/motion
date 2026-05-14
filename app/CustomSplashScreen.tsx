import Flower from '@/utils/svgs/Flower';
import Radial from '@/utils/svgs/Radial';
import { View, Text, StatusBar, StyleSheet, Dimensions } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const CustomSplashScreen = () => {
  const logo = require('../assets/images/logo.png');

  return (
    <Animated.View 
      exiting={FadeOut.duration(300)}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      
      {/* Radial Gradient Background */}
      <View style={StyleSheet.absoluteFill}>
        <Radial />
      </View>

      <View style={styles.content}>
        {/* Main Logo Image */}
        <Animated.Image 
          source={logo} 
          style={styles.image} 
          resizeMode="contain" 
          entering={FadeIn.delay(200).duration(800)}
        />

        {/* Text Content */}
        <Animated.View 
          entering={FadeIn.delay(400).duration(800)}
          style={styles.textContainer}
        >
          <Text style={styles.title}>Pace</Text>
          <Text style={styles.tagline}>Find your pace.{"\n"}Find your peace.</Text>
        </Animated.View>

        {/* Bottom Accent */}
        <Animated.View 
          entering={FadeIn.delay(600).duration(800)}
          style={styles.accentDotOuter}
        >
          <View style={styles.accentDotInner} />
        </Animated.View>
      </View>

      {/* Footer */}
      <Animated.View 
        entering={FadeIn.delay(800).duration(800)}
        style={styles.footer}
      >
        <Flower size={14} />
        <Text style={styles.footerText}>MINDFUL MOTION</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default CustomSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 12,
  },
  textContainer: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#9E421D',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 18,
    color: '#56423C',
    textAlign: 'center',
    lineHeight: 29.3,
    fontWeight: '400',
  },
  accentDotOuter: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#9E421D1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  accentDotInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF8C61',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#56423C',
    letterSpacing: 1.2,
    fontWeight: '500',
  },
});