import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { styles } from '../../styles/Auth.styles';
import { sheetStyles } from '../../styles/Signup.styles';
import request from 'superagent';
import { fetchStatesForCountry, fetchCitiesForCountryState } from '../../services/locationService';
import Toast from 'react-native-toast-message';

// Memoized list item component
const ListItem = React.memo(({ item, isSelected, onSelect }) => (
  <TouchableOpacity
    style={sheetStyles.listItem}
    onPress={() => onSelect(item)}
  >
    <Text style={sheetStyles.listItemText} numberOfLines={1} ellipsizeMode="tail">{item}</Text>
    {isSelected && (
      <Feather name="check" size={18} color="#5F60B9" />
    )}
  </TouchableOpacity>
));

const SignupScreen = ({ navigation }) => {

  const { control, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const insets = useSafeAreaInsets();
  const [states, setStates] = useState([]);
  const [statesLoading, setStatesLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false);

  const stateSheetRef = useRef(null);
  const citySheetRef = useRef(null);
  const SHEET_HEIGHT = useMemo(() => {
    const h = Dimensions.get('window').height;
    return Math.min(520, Math.round(h * 0.6));
  }, []);
  const stateSnapPoints = useMemo(() => [SHEET_HEIGHT], [SHEET_HEIGHT]);
  const citySnapPoints = useMemo(() => [SHEET_HEIGHT], [SHEET_HEIGHT]);
  const selectedState = watch('state');
  const selectedCity = watch('city');

  const renderBackdrop = useCallback((props) => (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      pressBehavior="close"
    />
  ), []);

  const openStatePicker = useCallback(() => stateSheetRef.current?.present(), []);
  const closeStatePicker = useCallback(() => stateSheetRef.current?.dismiss(), []);
  const openCityPicker = useCallback(() => citySheetRef.current?.present(), []);

  const getItemLayout = useCallback((data, index) => ({
    length: 48,
    offset: 48 * index,
    index,
  }), []);

  
  const handleStateSelect = useCallback((state) => {
    setValue('state', state, { shouldDirty: true, shouldValidate: false });
    setValue('city', '', { shouldDirty: true, shouldValidate: false });
    setCities([]);
    closeStatePicker();
  }, [setValue, closeStatePicker]);

  const renderStateItem = useCallback(({ item }) => (
    <ListItem
      item={item}
      isSelected={item === selectedState}
      onSelect={handleStateSelect}
    />
  ), [selectedState, handleStateSelect]);

  const handleCitySelect = useCallback((city) => {
    setValue('city', city, { shouldDirty: true, shouldValidate: false });
    citySheetRef.current?.dismiss();
  }, [setValue]);

  const renderCityItem = useCallback(({ item }) => (
    <ListItem
      item={item}
      isSelected={item === selectedCity}
      onSelect={handleCitySelect}
    />
  ), [selectedCity, handleCitySelect]);

  
  const fetchStates = useCallback(async () => {
    try {
      setStatesLoading(true);
      const list = await fetchStatesForCountry('India');
      setStates(list);
    } catch (e) {
      Toast.show({ type: 'error', text1: 'Failed to load states' });
    } finally {
      setStatesLoading(false);
    }
  }, []);

  const fetchCitiesForState = useCallback(async (stateName) => {
    try {
      setCitiesLoading(true);
      const list = await fetchCitiesForCountryState('India', stateName);
      setCities(list);
    } catch (e) {
      Toast.show({ type: 'error', text1: 'Failed to load cities' });
    } finally {
      setCitiesLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStates();
  }, [fetchStates]);

  const onSignupPress = async (data) => {
    setSubmitting(true);
    Toast.show({ type: 'success', text1: 'Signup successful', text2: 'Your data was sent.' });
    reset({ fullName: '', userName: '', email: '', password: '', contactNumber: '' });

    request
      .post('https://httpbin.org/post')
      .set('Content-Type', 'application/json')
      .timeout({ deadline: 2500 })
      .send({
        fullName: data?.fullName ?? '',
        userName: data?.userName ?? '',
        email: data?.email ?? '',
        password: data?.password ?? '',
        contactNumber: data?.contactNumber ?? '',
      })
      .catch(() => {});

    setSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={insets.top}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          contentInsetAdjustmentBehavior="automatic"
          contentInset={{ top: insets.top, bottom: insets.bottom }}
          scrollIndicatorInsets={{ top: insets.top, bottom: insets.bottom }}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}
        >
          <View style={styles.avatarContainer}>
            <Feather name="user" size={40} color="#FFFFFF" />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Hello User !</Text>
            <Text style={styles.subtitle}>Signup For Better Experience</Text>
          </View>

          <Controller
            control={control}
            name="state"
            render={({ field: { value } }) => (
              <TouchableOpacity activeOpacity={0.8} onPress={openStatePicker}>
                <View style={[styles.inputContainer, { justifyContent: 'space-between' }]}>
                  <Text style={[styles.input, value ? sheetStyles.selectText : sheetStyles.selectPlaceholder]} numberOfLines={1}>
                    {value || 'Select State'}
                  </Text>
                  <Feather name="chevron-down" size={20} color="#8F8F8F" />
                </View>
              </TouchableOpacity>
            )}
          />

          <Controller
            control={control}
            name="city"
            render={({ field: { value } }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={async () => {
                  if (!selectedState) {
                    Toast.show({ type: 'info', text1: 'Please select a state first' });
                    return;
                  }
                  if (cities.length === 0) {
                    await fetchCitiesForState(selectedState);
                  }
                  openCityPicker();
                }}
              >
                <View style={[styles.inputContainer, { justifyContent: 'space-between' }]}>
                  <Text style={[styles.input, value ? sheetStyles.selectText : sheetStyles.selectPlaceholder]} numberOfLines={1}>
                    {value || 'Select City'}
                  </Text>
                  <Feather name="chevron-down" size={20} color="#8F8F8F" />
                </View>
              </TouchableOpacity>
            )}
          />

          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <Feather name="user" size={20} color="#8F8F8F" />
              </View>
            )}
          />

          <Controller
            control={control}
            name="userName"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="User Name"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <Feather name="user" size={20} color="#8F8F8F" />
              </View>
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Feather name="mail" size={20} color="#8F8F8F" />
              </View>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={isPasswordSecure}
                />
                <TouchableOpacity onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <Feather
                    name={isPasswordSecure ? 'eye-off' : 'eye'}
                    size={20}
                    color="#8F8F8F"
                  />
                </TouchableOpacity>
              </View>
            )}
          />

          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSubmit(onSignupPress)}
            disabled={submitting}
          >
            <Text style={styles.loginButtonText}>
              {submitting ? 'PROCESSING...' : 'SIGNUP'}
            </Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity>
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.signupLink}>Sign In</Text>
              </Pressable>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>

    
      <BottomSheetModal
        ref={stateSheetRef}
        snapPoints={stateSnapPoints}
        enablePanDownToClose={false}
        enableHandlePanningGesture={false}
        enableContentPanningGesture={false}
        enableOverDrag={false}
        backdropComponent={renderBackdrop}
        topInset={insets.top}
        index={0}
      >
        <View style={sheetStyles.sheetContainer}>
          <Text style={sheetStyles.sheetTitle}>Select State</Text>
          <BottomSheetFlatList
            data={states}
            keyExtractor={(item) => item}
            contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
            initialNumToRender={16}
            maxToRenderPerBatch={16}
            windowSize={8}
            removeClippedSubviews={false}
            updateCellsBatchingPeriod={16}
            bounces={false}
            alwaysBounceVertical={false}
            overScrollMode="never"
            decelerationRate={0.6} // ⬅ slower scroll
            scrollEventThrottle={16}
            keyboardShouldPersistTaps="handled"
            renderItem={renderStateItem}
            ListFooterComponent={<View style={{ height: insets.bottom + 8 }} />}
            ListEmptyComponent={
              statesLoading ? (
                <View style={{ padding: 16 }}>
                  <Text style={{ textAlign: 'center', color: '#8F8F8F' }}>Loading states...</Text>
                </View>
              ) : (
                <View style={{ padding: 16 }}>
                  <Text style={{ textAlign: 'center', color: '#8F8F8F' }}>No states found</Text>
                </View>
              )
            }
          />

        </View>
      </BottomSheetModal>

      
      <BottomSheetModal
        ref={citySheetRef}
        snapPoints={citySnapPoints}
        enablePanDownToClose={false}
        enableHandlePanningGesture={false}
        enableContentPanningGesture={false}
        enableOverDrag={false}
        backdropComponent={renderBackdrop}
        topInset={insets.top}
        index={0}
      >
        <View style={sheetStyles.sheetContainer}>
          <Text style={sheetStyles.sheetTitle}>{selectedState ? `Cities in ${selectedState}` : 'Select City'}</Text>

          <BottomSheetFlatList
  data={cities}
  keyExtractor={(item) => item}
  contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
  initialNumToRender={24}
  maxToRenderPerBatch={24}
  windowSize={10}
  removeClippedSubviews={false}
  updateCellsBatchingPeriod={50}
  bounces={false}
  alwaysBounceVertical={false}
  overScrollMode="never"
  decelerationRate={0.6} // ⬅ slower scroll
  scrollEventThrottle={16}
  keyboardShouldPersistTaps="handled"
  renderItem={renderCityItem}
  ListFooterComponent={<View style={{ height: insets.bottom + 8 }} />}
  ListEmptyComponent={
    citiesLoading ? (
      <View style={{ padding: 16 }}>
        <Text style={{ textAlign: 'center', color: '#8F8F8F' }}>Loading cities...</Text>
      </View>
    ) : (
      <View style={{ padding: 16 }}>
        <Text style={{ textAlign: 'center', color: '#8F8F8F' }}>No cities found</Text>
      </View>
    )
  }
/>

        </View>
      </BottomSheetModal>
      
    </SafeAreaView>
  );
};

export default SignupScreen;