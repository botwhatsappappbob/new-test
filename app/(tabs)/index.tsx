import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin, Clock, Heart, Sparkles, MessageCircle } from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const mirrorExperiences = [
  {
    id: 1,
    country: 'Japan',
    city: 'Kyoto',
    culture: 'Traditional Tea Ceremony',
    narrative: 'Today you wake up in a traditional ryokan in Kyoto. The morning light filters through rice paper screens as you prepare for your daily tea ceremony practice. Your mirror self has been studying the art of chanoyu for three years.',
    income: 'Middle Class',
    occupation: 'Tea Master Apprentice',
    dailyRoutine: 'Morning meditation, tea preparation, garden maintenance',
    localCustoms: 'Bow respectfully, remove shoes, seasonal awareness',
    empathyPoints: 150,
    image: 'https://images.pexels.com/photos/161283/temple-kyoto-japan-architecture-161283.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    country: 'Morocco',
    city: 'Marrakech',
    culture: 'Berber Artisan Life',
    narrative: 'In the heart of Marrakech, your mirror self weaves traditional Berber carpets. The call to prayer echoes through the medina as you work alongside your family, continuing a craft passed down through generations.',
    income: 'Lower Middle Class',
    occupation: 'Carpet Weaver',
    dailyRoutine: 'Pre-dawn prayer, family breakfast, marketplace work',
    localCustoms: 'Mint tea sharing, storytelling, community support',
    empathyPoints: 120,
    image: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function MirrorScreen() {
  const [currentMirror, setCurrentMirror] = useState(mirrorExperiences[0]);
  const [empathyPoints, setEmpathyPoints] = useState(1250);
  const [showFullStory, setShowFullStory] = useState(false);

  const fadeAnim = useSharedValue(0);
  const scaleAnim = useSharedValue(0.8);

  useEffect(() => {
    fadeAnim.value = withTiming(1, { duration: 1000 });
    scaleAnim.value = withSpring(1, { damping: 15 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
      transform: [{ scale: scaleAnim.value }],
    };
  });

  const handleExperiencePress = () => {
    setShowFullStory(!showFullStory);
  };

  const handleEmpathyAction = () => {
    setEmpathyPoints(prev => prev + 10);
    // Haptic feedback would go here for mobile
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#3B82F6', '#1D4ED8']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>MirrorVerse</Text>
        <View style={styles.pointsContainer}>
          <Heart size={16} color="#FFFFFF" />
          <Text style={styles.pointsText}>{empathyPoints.toLocaleString()}</Text>
        </View>
      </LinearGradient>

      {/* Today's Mirror */}
      <Animated.View style={[styles.mirrorCard, animatedStyle]}>
        <View style={styles.mirrorHeader}>
          <Text style={styles.mirrorTitle}>Today's Mirror</Text>
          <View style={styles.locationContainer}>
            <MapPin size={16} color="#6B7280" />
            <Text style={styles.locationText}>
              {currentMirror.city}, {currentMirror.country}
            </Text>
          </View>
        </View>

        <Image
          source={{ uri: currentMirror.image }}
          style={styles.mirrorImage}
          resizeMode="cover"
        />

        <View style={styles.mirrorContent}>
          <Text style={styles.cultureTitle}>{currentMirror.culture}</Text>
          <Text style={styles.narrative}>
            {showFullStory 
              ? currentMirror.narrative 
              : `${currentMirror.narrative.substring(0, 120)}...`}
          </Text>
          
          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={handleExperiencePress}
          >
            <Text style={styles.readMoreText}>
              {showFullStory ? 'Show Less' : 'Read Full Story'}
            </Text>
          </TouchableOpacity>

          {showFullStory && (
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Occupation:</Text>
                <Text style={styles.detailValue}>{currentMirror.occupation}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Income Level:</Text>
                <Text style={styles.detailValue}>{currentMirror.income}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Daily Routine:</Text>
                <Text style={styles.detailValue}>{currentMirror.dailyRoutine}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Local Customs:</Text>
                <Text style={styles.detailValue}>{currentMirror.localCustoms}</Text>
              </View>
            </View>
          )}
        </View>
      </Animated.View>

      {/* Empathy Actions */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Build Empathy</Text>
        
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleEmpathyAction}
        >
          <Sparkles size={20} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>Reflect on This Experience</Text>
          <Text style={styles.actionPoints}>+10 points</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButtonSecondary}>
          <MessageCircle size={20} color="#3B82F6" />
          <Text style={styles.actionButtonSecondaryText}>Share Your Thoughts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButtonSecondary}>
          <Clock size={20} color="#3B82F6" />
          <Text style={styles.actionButtonSecondaryText}>Learn More About {currentMirror.country}</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Mirrors */}
      <View style={styles.recentContainer}>
        <Text style={styles.sectionTitle}>Recent Mirrors</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mirrorExperiences.map((mirror, index) => (
            <TouchableOpacity
              key={mirror.id}
              style={styles.recentMirrorCard}
              onPress={() => setCurrentMirror(mirror)}
            >
              <Image
                source={{ uri: mirror.image }}
                style={styles.recentMirrorImage}
                resizeMode="cover"
              />
              <Text style={styles.recentMirrorTitle}>{mirror.country}</Text>
              <Text style={styles.recentMirrorSubtitle}>{mirror.city}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pointsText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginLeft: 4,
  },
  mirrorCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  mirrorHeader: {
    padding: 20,
    paddingBottom: 12,
  },
  mirrorTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginLeft: 4,
  },
  mirrorImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginHorizontal: 20,
    width: width - 80,
  },
  mirrorContent: {
    padding: 20,
  },
  cultureTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 12,
  },
  narrative: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 12,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
  },
  readMoreText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#3B82F6',
  },
  detailsContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#6B7280',
    width: 100,
  },
  detailValue: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#1F2937',
    flex: 1,
  },
  actionsContainer: {
    margin: 20,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  actionButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginLeft: 8,
    flex: 1,
  },
  actionPoints: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  actionButtonSecondary: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  actionButtonSecondaryText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#3B82F6',
    marginLeft: 8,
  },
  recentContainer: {
    margin: 20,
    marginTop: 0,
  },
  recentMirrorCard: {
    backgroundColor: '#FFFFFF',
    width: 120,
    marginRight: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  recentMirrorImage: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  recentMirrorTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    padding: 8,
    paddingBottom: 4,
  },
  recentMirrorSubtitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});