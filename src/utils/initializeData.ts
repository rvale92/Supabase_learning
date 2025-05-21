import { supabase } from '../supabase/supabaseClient';
import type { Database } from '../types/supabase';

export const certificationData = [
  {
    name: 'JNCIA',
    code: 'JN0-105',
    description: 'Juniper Networks Certified Internet Associate - Entry-level certification focusing on networking fundamentals and Junos OS',
    vendor: 'Juniper Networks',
    level: 'Associate',
    exam_time: 90,
    passing_score: 65,
    number_of_questions: 65,
    price: 200,
    prerequisites: 'None',
    validity: '36 months'
  },
  {
    name: 'CCNA',
    code: '200-301',
    description: 'Cisco Certified Network Associate - Comprehensive networking certification covering networking fundamentals, security, automation and programmability',
    vendor: 'Cisco',
    level: 'Associate',
    exam_time: 120,
    passing_score: 825,
    number_of_questions: 100,
    price: 300,
    prerequisites: 'None',
    validity: '36 months'
  },
  {
    name: 'Security+',
    code: 'SY0-601',
    description: 'CompTIA Security+ - Global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career',
    vendor: 'CompTIA',
    level: 'Intermediate',
    exam_time: 90,
    passing_score: 750,
    number_of_questions: 90,
    price: 370,
    prerequisites: 'Network+ recommended',
    validity: '36 months'
  },
  {
    name: 'SC-205',
    code: 'SC-205',
    description: 'Microsoft Security Operations Analyst - Focuses on security monitoring, threat detection, and incident response using Microsoft security technologies',
    vendor: 'Microsoft',
    level: 'Associate',
    exam_time: 150,
    passing_score: 700,
    number_of_questions: 40,
    price: 165,
    prerequisites: 'Basic security knowledge',
    validity: '24 months'
  }
];

export const topicsData = {
  'JNCIA': [
    {
      title: 'Networking Fundamentals',
      description: 'OSI model, TCP/IP protocol suite, IPv4/IPv6 addressing, subnetting, and basic network services',
      percentage: 20,
      subtopics: [
        'OSI Reference Model',
        'TCP/IP Protocol Suite',
        'IPv4 and IPv6 Addressing',
        'Subnetting',
        'Network Services (DNS, DHCP)'
      ]
    },
    {
      title: 'Junos OS Fundamentals',
      description: 'Junos OS architecture, installation, and basic configuration concepts',
      percentage: 25,
      subtopics: [
        'Junos OS Architecture',
        'Installation and Boot Process',
        'User Interface Options',
        'Configuration Basics',
        'Configuration Groups'
      ]
    },
    {
      title: 'Routing & Switching',
      description: 'Layer 2 switching concepts, VLANs, STP, routing protocols (static, OSPF, BGP basics)',
      percentage: 30,
      subtopics: [
        'Layer 2 Switching',
        'VLANs and VLAN Tagging',
        'Spanning Tree Protocol',
        'Static Routing',
        'OSPF Fundamentals',
        'BGP Basics'
      ]
    },
    {
      title: 'Security & Platform',
      description: 'Basic security concepts, zones, firewall filters, and platform hardware',
      percentage: 15,
      subtopics: [
        'Security Zones',
        'Firewall Filters',
        'Platform Hardware',
        'Interface Types',
        'Basic Security Policies'
      ]
    },
    {
      title: 'Network Management',
      description: 'System monitoring, troubleshooting tools, and maintenance procedures',
      percentage: 10,
      subtopics: [
        'System Logging',
        'SNMP',
        'Network Troubleshooting',
        'System Maintenance',
        'Backup and Recovery'
      ]
    }
  ],
  'CCNA': [
    {
      title: 'Network Fundamentals',
      description: 'Network components, types of networks, network topologies and architectures',
      percentage: 20,
      subtopics: [
        'Network Components',
        'Network Access',
        'IP Connectivity',
        'IP Services',
        'Security Fundamentals'
      ]
    },
    {
      title: 'Network Access',
      description: 'Layer 2 concepts, switching, VLANs, and wireless principles',
      percentage: 20,
      subtopics: [
        'VLANs',
        'Interswitch Connectivity',
        'Layer 2 Discovery Protocols',
        'EtherChannel',
        'Wireless Principles'
      ]
    },
    {
      title: 'IP Connectivity',
      description: 'IPv4/IPv6 routing, static routing, and dynamic routing protocols',
      percentage: 25,
      subtopics: [
        'IPv4 Routing',
        'OSPF',
        'IPv6',
        'IP Services',
        'Network Troubleshooting'
      ]
    },
    {
      title: 'IP Services',
      description: 'Network services, QoS, and network architecture',
      percentage: 20,
      subtopics: [
        'NTP',
        'DHCP',
        'QoS',
        'Network Management',
        'Network Design'
      ]
    },
    {
      title: 'Security Fundamentals',
      description: 'Basic security concepts and network security implementation',
      percentage: 15,
      subtopics: [
        'Security Concepts',
        'Access Control',
        'Layer 2 Security',
        'VPNs',
        'Device Security'
      ]
    }
  ],
  'Security+': [
    {
      title: 'Attacks, Threats, and Vulnerabilities',
      description: 'Compare and contrast different types of social engineering techniques, analyze potential indicators of malware, and identify types of attacks',
      percentage: 24,
      subtopics: [
        'Social Engineering',
        'Attack Types',
        'Application Attacks',
        'Network Attacks',
        'Threat Actors and Intelligence'
      ]
    },
    {
      title: 'Architecture and Design',
      description: 'Enterprise security concepts, virtualization, cloud security, authentication and authorization design',
      percentage: 21,
      subtopics: [
        'Enterprise Security',
        'Virtualization and Cloud',
        'Secure Application Development',
        'Authentication and Authorization',
        'Resilience and Recovery'
      ]
    },
    {
      title: 'Implementation',
      description: 'Identity and access management, wireless security, mobile device security, and network security implementation',
      percentage: 25,
      subtopics: [
        'Identity and Access Management',
        'PKI and Encryption',
        'Network Security',
        'Host Security',
        'Data Security'
      ]
    },
    {
      title: 'Operations and Incident Response',
      description: 'Security tools, incident response procedures, and basic forensic concepts',
      percentage: 16,
      subtopics: [
        'Security Tools',
        'Incident Response',
        'Digital Forensics',
        'Security Assessment',
        'Vulnerability Management'
      ]
    },
    {
      title: 'Governance, Risk, and Compliance',
      description: 'Security policies, privacy, risk management, and regulations',
      percentage: 14,
      subtopics: [
        'Security Policies',
        'Privacy and Data Protection',
        'Risk Management',
        'Regulations and Standards',
        'Business Continuity'
      ]
    }
  ],
  'SC-205': [
    {
      title: 'Security Operations',
      description: 'Configure and maintain security monitoring solutions, analyze security monitoring data, and respond to security incidents',
      percentage: 25,
      subtopics: [
        'Security Monitoring',
        'SIEM Configuration',
        'Data Analysis',
        'Incident Response',
        'Threat Hunting'
      ]
    },
    {
      title: 'Threat Management',
      description: 'Identify and analyze threats using Microsoft security solutions',
      percentage: 30,
      subtopics: [
        'Threat Intelligence',
        'Advanced Hunting',
        'Microsoft Defender',
        'Cloud App Security',
        'Threat Analytics'
      ]
    },
    {
      title: 'Microsoft Security Solutions',
      description: 'Configure and use Microsoft 365 Defender, Microsoft Defender for Cloud, and Azure Sentinel',
      percentage: 25,
      subtopics: [
        'Microsoft 365 Defender',
        'Microsoft Defender for Endpoint',
        'Microsoft Defender for Cloud',
        'Azure Sentinel',
        'Security Automation'
      ]
    },
    {
      title: 'Compliance Management',
      description: 'Configure and maintain regulatory compliance solutions',
      percentage: 20,
      subtopics: [
        'Compliance Center',
        'Data Classification',
        'Information Protection',
        'Data Loss Prevention',
        'Compliance Policies'
      ]
    }
  ]
};

const checkDatabaseState = async () => {
  console.log('Checking database state...');
  
  try {
    // Check certifications
    const { data: certs, error: certsError } = await supabase
      .from('certifications')
      .select('*');
    
    if (certsError) {
      console.error('Error checking certifications:', certsError);
      throw certsError;
    }
    
    console.log('Current certifications:', certs);

    // Check topics
    const { data: topics, error: topicsError } = await supabase
      .from('topics')
      .select('*');
    
    if (topicsError) {
      console.error('Error checking topics:', topicsError);
      throw topicsError;
    }
    
    console.log('Current topics:', topics);

    return { certs, topics };
  } catch (error) {
    console.error('Error in checkDatabaseState:', error);
    throw error;
  }
};

export const initializeCertifications = async () => {
  console.log('Starting certification initialization...');
  
  try {
    // First check current state
    const { certs } = await checkDatabaseState().catch(error => {
      // If the error is that the topics table doesn't exist, we can still proceed
      if (error.code === '42P01' && error.message.includes('topics')) {
        return { certs: null, topics: null };
      }
      throw error;
    });
    
    // If we already have certifications, don't add more
    if (certs && certs.length > 0) {
      console.log('Certifications already exist in the database:', certs);
      return certs;
    }

    console.log('No existing certifications found, inserting new data...');

    // Insert the certification data
    const { data: insertedCerts, error: insertError } = await supabase
      .from('certifications')
      .insert(certificationData)
      .select();

    if (insertError) {
      console.error('Error inserting certifications:', insertError);
      throw insertError;
    }

    console.log('Successfully initialized certification data:', insertedCerts);
    return insertedCerts;
  } catch (error) {
    console.error('Error in initializeCertifications:', error);
    throw error;
  }
};

export const initializeTopics = async (certifications: Database['public']['Tables']['certifications']['Row'][]) => {
  console.log('Starting topics initialization...');
  try {
    // Check if we already have topics
    const { data: existingTopics, error: checkError } = await supabase
      .from('topics')
      .select('id');

    if (checkError) {
      if (checkError.code === '42P01') {
        // Table doesn't exist yet, that's okay
        console.log('Topics table does not exist yet, will be created...');
      } else {
        console.error('Error checking existing topics:', checkError);
        throw checkError;
      }
    }

    // If we already have topics, don't add more
    if (existingTopics && existingTopics.length > 0) {
      console.log('Topics already exist in the database');
      return;
    }

    console.log('No existing topics found, preparing to insert...');

    // Prepare topics data with certification IDs
    const topicsToInsert = certifications.flatMap(cert => {
      const certTopics = topicsData[cert.name as keyof typeof topicsData] || [];
      return certTopics.map(topic => ({
        certification_id: cert.id,
        title: topic.title,
        description: topic.description,
        percentage: topic.percentage,
      }));
    });

    console.log('Inserting topics:', topicsToInsert);

    // Insert all topics
    const { data: insertedTopics, error: insertError } = await supabase
      .from('topics')
      .insert(topicsToInsert)
      .select();

    if (insertError) {
      console.error('Error inserting topics:', insertError);
      throw insertError;
    }

    console.log('Successfully initialized topics data:', insertedTopics);
    return insertedTopics;
  } catch (error) {
    console.error('Error in initializeTopics:', error);
    throw error;
  }
}; 