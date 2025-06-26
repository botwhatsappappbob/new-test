import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  MessageCircle,
  Send,
  Globe,
  Heart,
  User,
  Languages,
  MapPin,
} from 'lucide-react-native';

const connectedUsers = [
  {
    id: 1,
    name: 'Akiko Tanaka',
    country: 'Japan',
    city: 'Tokyo',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    interests: ['Tea Ceremony', 'Gardening', 'Calligraphy'],
    empathyScore: 1420,
    isOnline: true,
    lastMessage: 'Thank you for sharing your perspective on family traditions!',
    timeAgo: '2 hours ago',
  },
  {
    id: 2,
    name: 'Hassan El-Mansouri',
    country: 'Morocco',
    city: 'Casablanca',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    interests: ['Storytelling', 'Crafts', 'Music'],
    empathyScore: 1180,
    isOnline: false,
    lastMessage: 'I would love to learn more about your cultural celebrations',
    timeAgo: '1 day ago',
  },
  {
    id: 3,
    name: 'Sofia Rodriguez',
    country: 'Colombia',
    city: 'Bogotá',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    interests: ['Dancing', 'Cooking', 'Photography'],
    empathyScore: 1350,
    isOnline: true,
    lastMessage: 'Your mirror experience in my country was so thoughtful!',
    timeAgo: '30 minutes ago',
  },
];

const suggestedConnections = [
  {
    id: 4,
    name: 'Raj Patel',
    country: 'India',
    city: 'Mumbai',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    interests: ['Philosophy', 'Cricket', 'Meditation'],
    empathyScore: 1290,
    compatibility: 85,
  },
  {
    id: 5,
    name: 'Emma Thompson',
    country: 'United Kingdom',
    city: 'Edinburgh',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    interests: ['Literature', 'Hiking', 'History'],
    empathyScore: 1150,
    compatibility: 92,
  },
];

export default function ConnectScreen() {
  const [selectedTab, setSelectedTab] = useState('conversations');
  const [message, setMessage] = useState('');

  const handleConnect = (userId: number) => {
    // Handle connection logic
    console.log(`Connecting with user ${userId}`);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#F97316', '#EA580C']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Connect</Text>
        <Text style={styles.headerSubtitle}>Bridge cultures through conversation</Text>
      </LinearGradient>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'conversations' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('conversations')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'conversations' && styles.activeTabText,
            ]}
          >
            Conversations
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'discover' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('discover')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'discover' && styles.activeTabText,
            ]}
          >
            Discover
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {selectedTab === 'conversations' ? (
          <>
            {/* Active Conversations */}
            <Text style={styles.sectionTitle}>Active Conversations</Text>
            {connectedUsers.map((user) => (
              <TouchableOpacity key={user.id} style={styles.conversationCard}>
                <View style={styles.userInfo}>
                  <Image source={{ uri: user.avatar }} style={styles.avatar} />
                  <View style={styles.onlineIndicator} />
                  <View style={styles.userDetails}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <View style={styles.locationContainer}>
                      <MapPin size={12} color="#6B7280" />
                      <Text style={styles.location}>
                        {user.city}, {user.country}
                      </Text>
                    </View>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                      {user.lastMessage}
                    </Text>
                  </View>
                </View>
                <View style={styles.conversationMeta}>
                  <Text style={styles.timeAgo}>{user.timeAgo}</Text>
                  <View style={styles.empathyBadge}>
                    <Heart size={12} color="#F97316" />
                    <Text style={styles.empathyScore}>{user.empathyScore}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {/* Quick Message */}
            <View style={styles.quickMessageContainer}>
              <Text style={styles.sectionTitle}>Send a Quick Message</Text>
              <View style={styles.messageInputContainer}>
                <TextInput
                  style={styles.messageInput}
                  placeholder="Share your thoughts about today's mirror experience..."
                  value={message}
                  onChangeText={setMessage}
                  multiline
                />
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={handleSendMessage}
                >
                  <Send size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            {/* Suggested Connections */}
            <Text style={styles.sectionTitle}>Suggested Connections</Text>
            <Text style={styles.sectionSubtitle}>
              Find mirror selves who share your interests and values
            </Text>
            
            {suggestedConnections.map((user) => (
              <View key={user.id} style={styles.suggestionCard}>
                <View style={styles.suggestionHeader}>
                  <Image source={{ uri: user.avatar }} style={styles.avatar} />
                  <View style={styles.suggestionInfo}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <View style={styles.locationContainer}>
                      <MapPin size={12} color="#6B7280" />
                      <Text style={styles.location}>
                        {user.city}, {user.country}
                      </Text>
                    </View>
                    <View style={styles.compatibilityContainer}>
                      <Text style={styles.compatibilityText}>
                        {user.compatibility}% compatibility
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.interestsContainer}>
                  <Text style={styles.interestsLabel}>Shared Interests:</Text>
                  <View style={styles.interestTags}>
                    {user.interests.map((interest, index) => (
                      <View key={index} style={styles.interestTag}>
                        <Text style={styles.interestText}>{interest}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={styles.suggestionActions}>
                  <TouchableOpacity
                    style={styles.connectButton}
                    onPress={() => handleConnect(user.id)}
                  >
                    <Globe size={16} color="#FFFFFF" />
                    <Text style={styles.connectButtonText}>Connect</Text>
                  </TouchableOpacity>
                  <View style={styles.empathyBadge}>
                    <Heart size={12} color="#F97316" />
                    <Text style={styles.empathyScore}>{user.empathyScore}</Text>
                  </View>
                </View>
              </View>
            ))}

            {/* Translation Note */}
            <View style={styles.translationNote}>
              <Languages size={20} color="#3B82F6" />
              <Text style={styles.translationText}>
                All conversations are automatically translated to bridge language barriers
              </Text>
            </View>
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 12,
    padding: 4,
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
    backgroundColor: '#F97316',
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
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
  conversationCard: {
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
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    backgroundColor: '#10B981',
    borderRadius: 6,
    position: 'absolute',
    left: 38,
    top: 38,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  userDetails: {
    marginLeft: 16,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  location: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginLeft: 4,
  },
  lastMessage: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 4,
  },
  conversationMeta: {
    alignItems: 'flex-end',
  },
  timeAgo: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginBottom: 4,
  },
  empathyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  empathyScore: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#F97316',
    marginLeft: 4,
  },
  quickMessageContainer: {
    marginTop: 20,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  messageInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1F2937',
    maxHeight: 100,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#F97316',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  suggestionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  suggestionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  suggestionInfo: {
    marginLeft: 16,
    flex: 1,
  },
  compatibilityContainer: {
    marginTop: 4,
  },
  compatibilityText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
  },
  interestsContainer: {
    marginBottom: 16,
  },
  interestsLabel: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 8,
  },
  interestTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestTag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 4,
  },
  interestText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  suggestionActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  connectButton: {
    backgroundColor: '#F97316',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  connectButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  translationNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  translationText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#3B82F6',
    marginLeft: 12,
    flex: 1,
  },
});