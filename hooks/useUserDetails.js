import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseclient'; // Make sure to import your Supabase client

const useUserDetails = () => {
  const [user, setUser] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error('Error fetching user:', error);
        return;
      }

      if (user) {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError) {
          console.error('Error fetching profile:', profileError);
        } else {
          setUser(profile);

          // Fetch relevant details based on user type
          if (profile.user_type === 'investor') {
            const { data: investor, error: investorError } = await supabase
              .from('investor_signup')
              .select('*')
              .eq('profile_id', user.id)
              .single();

            if (investorError) {
              console.error('Error fetching investor details:', investorError);
            } else {
              setDetails({ ...investor, type: 'investor' });
            }
          } else if (profile.user_type === 'startup') {
            const { data: startup, error: startupError } = await supabase
              .from('company_profile')
              .select('*')
              .eq('profile_id', user.id)
              .single();

            if (startupError) {
              console.error('Error fetching startup details:', startupError);
            } else {
              setDetails({ ...startup, type: 'startup' });
            }
          }
        }
      }

      setLoading(false);
    };

    fetchUserDetails();
  }, []);

  return { user, details, loading };
};

export default useUserDetails;
