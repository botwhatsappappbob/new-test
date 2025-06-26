import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Trophy,
  Heart,
  Globe,
  TrendingUp,
  Award,
  Star,
  Crown,
} from 'lucide-react-native';

const leaderboardData = [
  {
    id: 1,
    rank: 1,
    name: 'Elena Vasquez',
    country: 'Spain',
    empathyPoints: 2450,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    mirrorsExperienced: 45,
    connectionsHelped: 18,
    badge: 'Empathy Champion',
  },
  {
    id: 2,
    rank: 2,
    name: 'You',
    country: 'Current Location',
    empathyPoints: 1850,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    mirrorsExperienced: 32,
    connectionsHelped: 12,
    badge: 'Global Connector',
    isCurrentUser: true,
  },
  {
    id: 3,
    rank: 3,
    name: 'Kofi Asante',
    country: 'Ghana',
    empathyPoints: 1720,
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    mirrorsExperienced: 38,
    connectionsHelped: 15,
    badge: 'Culture Bridge',
  },
  {
    id: 4,
    rank: 4,
    name: 'Mei Chen',
    country: 'Singapore',
    empathyPoints: 1650,
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    mirrorsExperienced: 29,
    connectionsHelped: 11,
    badge: 'Wisdom Seeker',
  },
  {
    id: 5,
    rank: 5,
    name: 'Ahmed Hassan',
    country: 'Egypt',
    empathyPoints: 1580,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    mirrorsExperienced: 35,
    connectionsHelped: 9,
    badge: 'Story Teller',
  },
];

const achievements = [
  {
    id: 1,
    title: 'First Mirror',
    description: 'Completed your first cultural mirror experience',
    icon: 'Globe',
    earned: true,
    points: 50,
  },
  {
    id: 2,
    title: 'Empathy Builder',
    description: 'Accumulated 1000 empathy points',
    icon: 'Heart',
    earned: true,
    points: 100,
  },
  {
    id: 3,
    title: 'Global Connector',
    description: 'Connected with users from 5 different countries',
    icon: 'Star',
    earned: true,
    points: 150,
  },
  {
    id: 4,
    title: 'Cultural Ambassador',
    description: 'Experience mirrors from 20 different countries',
    icon: 'Award',
    earned: false,
    points: 200,
    progress: 15,
    total: 20,
  },
];

const impactStats = [
  {
    label: 'Countries Explored',
    value: '32',
    change: '+3 this week',
    color: '#3B82F6',
  },
  {
    label: 'Connections Made',
    value: '18',
    change: '+2 this week',
    color: '#10B981',
  },
  {
    label: 'Stories Shared',
    value: '45',
    change: '+7 this week',
    color: '#F59E0B',
  },
  {
    label: 'Empathy Points',
    value: '1,850',
    change: '+120 this week',
    color: '#EF4444',
  },
];

export default function LeaderboardScreen() {
  const [selectedTab, setSelectedTab] = useState('global');

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown size={20} color="#FFD700" />;
      case 2:
        return <Trophy size={20} color="#C0C0C0" />;
      case 3:
        return <Award size={20} color="#CD7F32" />;
      default:
        return <Text style={styles.rankNumber}>{rank}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#10B981', '#059669']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Impact</Text>
        <Text style={styles.headerSubtitle}>Your global empathy journey</Text>
      </LinearGradient>

      {/* Impact Stats */}
      <View style={styles.statsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {impactStats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={[styles.statChange, { color: stat.color }]}>
                {stat.change}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'global' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('global')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'global' && styles.activeTabText,
              ]}
            >
              Global
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'achievements' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('achievements')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'achievements' && styles.activeTabText,
              ]}
            >
              Achievements
            </Text>
          </TouchableOpacity>
        </View>

        {selectedTab === 'global' ? (
          <>
            {/* Leaderboard */}
            <Text style={styles.sectionTitle}>Global Empathy Leaders</Text>
            <Text style={styles.sectionSubtitle}>
              Top contributors to global understanding this month
            </Text>

            {leaderboardData.map((user) => (
              <View
                key={user.id}
                style={[
                  styles.leaderboardCard,
                  user.isCurrentUser && styles.currentUserCard,
                ]}
              >
                <View style={styles.rankContainer}>
                  {getRankIcon(user.rank)}
                </View>

                <Image source={{ uri: user.avatar }} style={styles.avatar} />

                <View style={styles.userInfo}>
                  <Text style={styles.userName}>
                    {user.name}
                    {user.isCurrentUser && ' (You)'}
                  </Text>
                  <Text style={styles.userCountry}>{user.country}</Text>
                  <Text style={styles.userBadge}>{user.badge}</Text>
                </View>

                <View style={styles.userStats}>
                  <View style={styles.statItem}>
                    <Heart size={16} color="#EF4444" />
                    <Text style={styles.statText}>{user.empathyPoints}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Globe size={16} color="#3B82F6" />
                    <Text style={styles.statText}>{user.mirrorsExperienced}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <TrendingUp size={16} color="#10B981" />
                    <Text style={styles.statText}>{user.connectionsHelped}</Text>
                  </View>
                </View>
              </View>
            ))}

            {/* Your Progress */}
            <View style={styles.progressSection}>
              <Text style={styles.sectionTitle}>Your Progress</Text>
              <View style={styles.progressCard}>
                <Text style={styles.progressTitle}>Next Milestone</Text>
                <Text style={styles.progressSubtitle}>
                  150 points to reach Empathy Champion
                </Text>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: '75%' }]} />
                </View>
                <Text style={styles.progressText}>1,850 / 2,000 points</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            {/* Achievements */}
            <Text style={styles.sectionTitle}>Your Achievements</Text>
            <Text style={styles.sectionSubtitle}>
              Unlock badges as you build empathy across cultures
            </Text>

            {achievements.map((achievement) => (
              <View
                key={achievement.id}
                style={[
                  styles.achievementCard,
                  !achievement.earned && styles.unearned,
                ]}
              >
                <View style={styles.achievementIcon}>
                  {achievement.icon === 'Globe' && (
                    <Globe size={24} color={achievement.earned ? '#10B981' : '#9CA3AF'} />
                  )}
                  {achievement.icon === 'Heart' && (
                    <Heart size={24} color={achievement.earned ? '#EF4444' : '#9CA3AF'} />
                  )}
                  {achievement.icon === 'Star' && (
                    <Star size={24} color={achievement.earned ? '#F59E0B' : '#9CA3AF'} />
                  )}
                  {achievement.icon === 'Award' && (
                    <Award size={24} color={achievement.earned ? '#8B5CF6' : '#9CA3AF'} />
                  )}
                </View>

                <View style={styles.achievementInfo}>
                  <Text
                    style={[
                      styles.achievementTitle,
                      !achievement.earned && styles.unearnedText,
                    ]}
                  >
                    {achievement.title}
                  </Text>
                  <Text
                    style={[
                      styles.achievementDescription,
                      !achievement.earned && styles.unearnedText,
                    ]}
                  >
                    {achievement.description}
                  </Text>
                  
                  {achievement.progress && (
                    <View style={styles.achievementProgress}>
                      <View style={styles.progressBar}>
                        <View
                          style={[
                            styles.progressFill,
                            { width: `${(achievement.progress / achievement.total) * 100}%` },
                          ]}
                        />
                      </View>
                      <Text style={styles.progressText}>
                        {achievement.progress} / {achievement.total}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={styles.achievementPoints}>
                  <Text
                    style={[
                      styles.pointsText,
                      !achievement.earned && styles.unearnedText,
                    ]}
                  >
                    +{achievement.points}
                  </Text>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
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
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  statsContainer: {
    marginHorizontal: 20,
    marginTop: -20,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    minWidth: 120,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
  statChange: {
    fontSize: 11,
    fontFamily: 'Inter-SemiBold',
    marginTop: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#10B981',
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 16,
  },
  leaderboardCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  currentUserCard: {
    borderWidth: 2,
    borderColor: '#10B981',
    backgroundColor: '#F0FDF4',
  },
  rankContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rankNumber: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  userCountry: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 2,
  },
  userBadge: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
    marginTop: 4,
  },
  userStats: {
    alignItems: 'flex-end',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginLeft: 4,
  },
  progressSection: {
    marginTop: 20,
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  progressTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  progressSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  unearned: {
    opacity: 0.6,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  achievementDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 4,
  },
  unearnedText: {
    color: '#9CA3AF',
  },
  achievementProgress: {
    marginTop: 8,
  },
  achievementPoints: {
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#10B981',
  },
});