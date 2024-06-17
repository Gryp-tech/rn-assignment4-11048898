import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('./images/facebook.png') },
    { id: '2', title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'Mountain View, CA', logo: require('./images/google.png') },
  ];

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('./images/burger.png') },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('./images/beats.png') },
    { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('./images/facebook.png') },
  ];

  const renderFeaturedJob = ({ item }) => (
    <View style={[styles.featuredCard, { backgroundColor: item.company === 'Facebook' ? '#f0f8ff' : '#333' }]}>
      <View style={styles.featuredJobLogoContainer}>
        <Image source={item.logo} style={styles.featuredJobLogo} />
      </View>
      <View style={styles.featuredJobDetails}>
        <Text style={styles.featuredJobTitle}>{item.title}</Text>
        <Text style={styles.featuredJobCompany}>{item.company}</Text>
        <View style={styles.featuredJobSalaryLocationContainer}>
          <Text style={styles.featuredJobSalary}>{item.salary}</Text>
          <Text style={styles.featuredJobLocation}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  const renderPopularJob = ({ item }) => (
    <View style={styles.popularCard}>
      <View style={styles.popularJobLogoContainer}>
        <Image source={item.logo} style={styles.popularJobLogo} />
      </View>
      <View style={styles.popularCardContent}>
        <View>
          <Text style={styles.popularJobTitle}>{item.title}</Text>
          <Text style={styles.popularJobCompany}>{item.company}</Text>
        </View>
        <View style={styles.popularJobSalaryLocationContainer}>
          <View style={styles.popularJobSalaryLocation}>
            <Text style={styles.popularJobSalary}>{item.salary}</Text>
            <Text style={styles.popularJobLocation}>{item.location}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
        <Image source={require('./images/profile.png')} style={styles.userImage} />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInnerContainer}>
          <Image source={require('./images/search.png')} style={styles.searchIcon} />
          <TextInput
            placeholder="Search a job or position"
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>
        <Image source={require('./images/Filter.png')} style={styles.filterIcon} />
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <FlatList
          horizontal
          data={featuredJobs}
          renderItem={renderFeaturedJob}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <FlatList
          data={popularJobs}
          renderItem={renderPopularJob}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  searchInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#000',
  },
  filterIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#1E90FF',
    fontSize: 14,
  },
  featuredCard: {
    backgroundColor: '#f0f8ff',
    borderRadius: 30,
    padding: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 380,
    height: 200,
  },
  featuredJobLogoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
  },
  featuredJobLogo: {
    width: 40,
    height: 40,
  },
  featuredJobDetails: {
    flex: 1,
  },
  featuredJobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featuredJobCompany: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  featuredJobSalaryLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredJobSalary: {
    fontSize: 16,
    color: '#000',
  },
  featuredJobLocation: {
    fontSize: 16,
    color: '#000',
  },
  popularCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularJobLogoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
  },
  popularJobLogo: {
    width: 40,
    height: 40,
  },
  popularCardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularJobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  popularJobCompany: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  popularJobSalaryLocationContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  popularJobSalaryLocation: {
    alignItems: 'flex-end',
  },
  popularJobSalary: {
    fontSize: 12,
    color: '#000',
  },
  popularJobLocation: {
    fontSize: 12,
    color: '#555',
  },
});

export default HomeScreen;
