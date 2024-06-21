import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseclient';

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
            const fetchStartupDetails = async () => {
              try {
                const { data: startup, error: startupError } = await supabase
                  .from('company_profile')
                  .select('*')
                  .eq('profile_id', user.id)
                  .single();

                if (startupError) throw startupError;

                const companyId = startup.id;

                const { data: businessDetails, error: businessError } =
                  await supabase
                    .from('business_details')
                    .select('*')
                    .eq('company_id', companyId)
                    .single();

                if (businessError) throw businessError;

                const { data: founderInformation, error: founderError } =
                  await supabase
                    .from('founder_information')
                    .select('*')
                    .eq('company_id', companyId)
                    .single();

                if (founderError) throw founderError;

                const { data: cofounderInformation, error: cofounderError } =
                  await supabase
                    .from('cofounder_information')
                    .select('*')
                    .eq('company_id', companyId)
                    .single();

                if (cofounderError) throw cofounderError;

                const { data: fundingInformation, error: fundingError } =
                  await supabase
                    .from('funding_information')
                    .select('*')
                    .eq('company_id', companyId)
                    .single();

                if (fundingError) throw fundingError;

                setDetails({
                  ...startup,
                  businessDetails,
                  founderInformation,
                  cofounderInformation,
                  fundingInformation,
                  type: 'startup',
                });
              } catch (error) {
                console.error('Error fetching startup details:', error);
              }
            };

            fetchStartupDetails();
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
