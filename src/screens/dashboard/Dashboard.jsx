import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from '../../styles/Dashboard.styles';
import { useAuth } from '../../redux/authContext';

const serviceCategories = [
  { id: '1', name: 'Cleaning', icon: 'wind' },
  { id: '2', name: 'Repairing', icon: 'tool' },
  { id: '3', name: 'Painting', icon: 'edit' },
  { id: '4', name: 'Plumbing', icon: 'droplet' },
  { id: '5', name: 'Shifting', icon: 'truck' },
  { id: '6', name: 'More', icon: 'grid' },
];

const DashboardScreen = () => {
  const { user, signOut } = useAuth();
  const displayName = (user?.email || 'User').split('@')[0] || 'User';

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <View style={styles.categoryIconContainer}>
        <Feather name={item.icon} size={24} color="#2A5CFF" />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2A5CFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerTopRow}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>{`Hello ${displayName}`}</Text>
              <Text style={styles.welcomeSubtitle}>Find the best services near you</Text>
            </View>
            <TouchableOpacity style={styles.avatar} onPress={signOut} accessibilityRole="button" accessibilityLabel="Log out">
              <Feather name="log-out" size={22} color="#2A5CFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="#8F8F8F" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for a service..."
              placeholderTextColor="#8F8F8F"
            />
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Categories Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <FlatList
            data={serviceCategories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            numColumns={3}
            contentContainerStyle={styles.categoryGrid}
            scrollEnabled={false}
          />

          {/* Popular Services Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Services</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <View style={styles.popularServiceCard}>
            <View style={styles.popularServiceContent}>
              <Text style={styles.popularServiceTitle}>Home Deep Cleaning</Text>
              <Text style={styles.popularServiceSubtitle}>Professional cleaning for your entire home</Text>
              <View style={styles.ratingContainer}>
                <Feather name="star" size={16} color="#FFC107" />
                <Text style={styles.ratingText}>4.9 (120 reviews)</Text>
              </View>
              <TouchableOpacity style={styles.bookNowButton}>
                <Text style={styles.bookNowText}>Book Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.popularServiceImage} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;