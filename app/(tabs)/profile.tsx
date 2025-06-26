import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { User, Settings, Globe, Heart, Bell, Shield, CircleHelp as HelpCircle, LogOut, CreditCard as Edit, Camera, Languages, MapPin } from 'lucide-react-native';

const userProfile = {
  name: 'Alex Chen',
  location: 'San Francisco, CA',
  joinDate: 'March 2024',
  empathyPoints: 1850,
  mirrorsExperienced: 32,
  countriesExplored: 18,
  connectionsHelped: 12,
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  bio: 'Passionate about understanding different cultures and building bridges between communities. Love learning about traditional crafts and local cuisines.',
  interests: ['Cultural Arts', 'Cooking', 'Languages', 'Photography', 'Music'],
  languagesSpoken: ['English', 'Mandarin', 'Spanish'],
};

const settingsOptions = [
  {
    id: 1,
    title: 'Notifications',
    subtitle: 'Daily mirrors and connections',
    icon: 'Bell',
    hasSwitch: true,
    enabled: true,
  },
  {
    id: 2,
    title: 'Privacy',
    subtitle: 'Control your data and visibility',
    icon: 'Shield',
    hasSwitch: false,
  },
  {
    id: 3,
    title: 'Language',
    subtitle: 'App language and translation',
    icon: 'Languages',
    hasSwitch: false,
  },
  {
    id: 4,
    title: 'Help & Support',
    subtitle: 'Get help with MirrorVerse',
    icon: 'HelpCircle',
    hasSwitch: false,
  },
];

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleEditProfile = () => {
    // Handle edit profile
    console.log('Edit profile');
  };

  const handleSettingPress = (setting: any) => {
    // Handle setting press
    console.log('Setting pressed:', setting.title);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#8B5CF6', '#7C3AED']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
          <TouchableOpacity style={styles.cameraButton}>
            <Camera size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>{userProfile.name}</Text>
        <View style={styles.locationContainer}>
          <MapPin size={16} color="#6B7280" />
          <Text style={styles.location}>{userProfile.location}</Text>
        </View>
        <Text style={styles.joinDate}>Joined {userProfile.joinDate}</Text>

        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Edit size={16} color="#3B82F6" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsSection}>
        <View style={styles.statCard}>
          <Heart size={20} color="#EF4444" />
          <Text style={styles.statValue}>{userProfile.empathyPoints.toLocaleString()}</Text>
          <Text style={styles.statLabel}>Empathy Points</Text>
        </View>
        <View style={styles.statCard}>
          <Globe size={20} color="#3B82F6" />
          <Text style={styles.statValue}>{userProfile.mirrorsExperienced}</Text>
          <Text style={styles.statLabel}>Mirrors</Text>
        </View>
        <View style={styles.statCard}>
          <MapPin size={20} color="#10B981" />
          <Text style={styles.statValue}>{userProfile.countriesExplored}</Text>
          <Text style={styles.statLabel}>Countries</Text>
        </View>
      </View>

      {/* Bio */}
      <View style={styles.bioSection}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.bioText}>{userProfile.bio}</Text>
      </View>

      {/* Interests */}
      <View style={styles.interestsSection}>
        <Text style={styles.sectionTitle}>Interests</Text>
        <View style={styles.interestTags}>
          {userProfile.interests.map((interest, index) => (
            <View key={index} style={styles.interestTag}>
              <Text style={styles.interestText}>{interest}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Languages */}
      <View style={styles.languagesSection}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <View style={styles.languageList}>
          {userProfile.languagesSpoken.map((language, index) => (
            <View key={index} style={styles.languageItem}>
              <Languages size={16} color="#6B7280" />
              <Text style={styles.languageText}>{language}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Settings */}
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Settings</Text>
        {settingsOptions.map((setting) => (
          <TouchableOpacity
            key={setting.id}
            style={styles.settingItem}
            onPress={() => handleSettingPress(setting)}
          >
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                {setting.icon === 'Bell' && <Bell size={20} color="#6B7280" />}
                {setting.icon === 'Shield' && <Shield size={20} color="#6B7280" />}
                {setting.icon === 'Languages' && <Languages size={20} color="#6B7280" />}
                {setting.icon === 'HelpCircle' && <HelpCircle size={20} color="#6B7280" />}
              </View>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>{setting.title}</Text>
                <Text style={styles.settingSubtitle}>{setting.subtitle}</Text>
              </View>
            </View>
            {setting.hasSwitch ? (
              <Switch
                value={setting.id === 1 ? notificationsEnabled : false}
                onValueChange={setting.id === 1 ? setNotificationsEnabled : undefined}
                trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
                thumbColor={setting.enabled ? '#FFFFFF' : '#FFFFFF'}
              />
            ) : (
              <View style={styles.settingArrow}>
                <Text style={styles.arrowText}>›</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <LogOut size={20} color="#EF4444" />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>MirrorVerse v1.0.0</Text>
        <Text style={styles.footerText}>Building empathy across cultures</Text>
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
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  userName: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginLeft: 4,
  },
  joinDate: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginBottom: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  editButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#3B82F6',
    marginLeft: 8,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },
  statCard: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginTop: 4,
  },
  bioSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 12,
  },
  bioText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#4B5563',
    lineHeight: 24,
  },
  interestsSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 8,
  },
  interestTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestTag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  interestText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  languagesSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 8,
  },
  languageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  languageText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginLeft: 8,
  },
  settingsSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  settingSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 2,
  },
  settingArrow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
    marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#EF4444',
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginBottom: 4,
  },
});