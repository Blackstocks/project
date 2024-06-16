'use sever';
import { supabase } from '@/lib/supabaseclient';

export const handleFileUpload = async (file, bucket, companyName, folder) => {
  if (!file) {
    console.log(`${folder} is not provided.`);
    return null;
  }

  console.log(`Uploading ${folder}:`, file);

  const filePath = `${companyName}/${folder}/${Date.now()}-${file.name}`;

  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) {
      throw error;
    }

    console.log(`${folder} uploaded successfully:`, data.path);
    return data.path; // Return the file path
  } catch (error) {
    console.error(`Error uploading ${folder}:`, error);
    throw error;
  }
};

export const insertCompanyProfile = async (formData, uploadedFiles) => {
  const { data: companyProfileData, error: companyProfileError } =
    await supabase
      .from('company_profile')
      .insert([
        {
          profile_id: formData.profile_id, // Ensure the profile_id is included here
          company_name: formData.companyName,
          short_description: formData.shortDescription,
          incorporation_date: formData.incorporationDate,
          country: formData.country,
          state_city: formData.stateCity,
          office_address: formData.officeAddress,
          pin_code: formData.pinCode,
          company_website: formData.companyWebsite,
          linkedin_profile: formData.linkedinProfile,
          company_logo: uploadedFiles.companyLogo || '',
        },
      ])
      .select();

  if (companyProfileError) {
    throw companyProfileError;
  }

  return companyProfileData[0].id;
};

export const insertBusinessDetails = async (
  companyId,
  formData,
  uploadedFiles
) => {
  const { error: businessDetailsError } = await supabase
    .from('business_details')
    .insert([
      {
        company_id: companyId,
        industry_sector: formData.industrySector,
        current_stage: formData.currentStage,
        current_traction: formData.currentTraction,
        target_audience: formData.targetAudience,
        team_size: formData.teamSize,
        usp_moat: formData.uspMoat,
        certificate_of_incorporation:
          uploadedFiles.certificateOfIncorporation || '',
        gst_certificate: uploadedFiles.gstCertificate || '',
        startup_india_certificate: uploadedFiles.startupIndiaCertificate || '',
        due_diligence_report: uploadedFiles.dueDiligenceReport || '',
        business_valuation_report: uploadedFiles.businessValuationReport || '',
        mis: uploadedFiles.mis || '',
        pitch_deck: uploadedFiles.pitchDeck || '',
        video_pitch: uploadedFiles.videoPitch || '',
      },
    ]);

  if (businessDetailsError) {
    throw businessDetailsError;
  }
};

export const insertFundingInformation = async (
  companyId,
  formData,
  uploadedFiles
) => {
  const { error: fundingInformationError } = await supabase
    .from('funding_information')
    .insert([
      {
        company_id: companyId,
        total_funding_ask: formData.totalFundingAsk,
        amount_committed: formData.amountCommitted,
        current_cap_table: uploadedFiles.currentCapTable || '',
        government_grants: formData.governmentGrants,
        equity_split: formData.equitySplit,
        fund_utilization: formData.fundUtilization,
        arr: formData.arr,
        mrr: formData.mrr,
      },
    ]);

  if (fundingInformationError) {
    throw fundingInformationError;
  }
};

export const insertContactInformation = async (companyId, formData) => {
  const { error: contactInformationError } = await supabase
    .from('contact_information')
    .insert([
      {
        company_id: companyId,
        mobile: formData.mobile,
        business_description: formData.businessDescription,
      },
    ]);

  if (contactInformationError) {
    throw contactInformationError;
  }
};

export const insertFounderInformation = async (companyId, formData) => {
  const { error: founderInformationError } = await supabase
    .from('founder_information')
    .insert([
      {
        company_id: companyId,
        founder_name: formData.founderName,
        founder_email: formData.founderEmail,
        founder_mobile: formData.founderMobile,
        founder_linkedin: formData.founderLinkedin,
        degree_name: formData.degreeName,
        college_name: formData.collegeName,
        graduation_year: formData.graduationYear,
      },
    ]);

  if (founderInformationError) {
    throw founderInformationError;
  }
};

export const insertCofounderInformation = async (companyId, formData) => {
  const { error: cofounderInformationError } = await supabase
    .from('cofounder_information')
    .insert([
      {
        company_id: companyId,
        cofounder_name: formData.cofounderName,
        cofounder_email: formData.cofounderEmail,
        cofounder_mobile: formData.cofounderMobile,
        cofounder_linkedin: formData.cofounderLinkedin,
      },
    ]);

  if (cofounderInformationError) {
    throw cofounderInformationError;
  }
};
