import { createClient } from '@supabase/supabase-js';
import type { Database } from './types/supabase';

const supabaseUrl = 'https://mkivdveacuoazqgaigah.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raXZkdmVhY3VvYXpxZ2FpZ2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3ODE5ODgsImV4cCI6MjA2MzM1Nzk4OH0.AnItBXzEa6WCs8A_Ca1miafaGGEMC9yQdD64AyYa454';

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

const certificationData = [
  {
    title: 'JNCIA',
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
    title: 'CCNA',
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
    title: 'Security+',
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
    title: 'SC-205',
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

const topicsData = {
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
    }
  ]
};

async function testConnection() {
  try {
    // Test connection
    const { data: test, error: testError } = await supabase
      .from('certifications')
      .select('*')
      .limit(1);
    
    if (testError) {
      console.error('Connection test failed:', testError);
      return;
    }
    
    console.log('Connection successful!');
    console.log('Current data:', test);

    // Initialize certifications
    const { data: certs, error: certsError } = await supabase
      .from('certifications')
      .insert(certificationData)
      .select();

    if (certsError) {
      console.error('Error inserting certifications:', certsError);
      return;
    }

    console.log('Successfully inserted certifications:', certs);

    // Initialize topics for each certification
    for (const cert of certs) {
      const certTopics = topicsData[cert.title as keyof typeof topicsData] || [];
      const topicsToInsert = certTopics.map(topic => ({
        certification_id: cert.id,
        title: topic.title,
        description: topic.description,
        percentage: topic.percentage,
        subtopics: topic.subtopics
      }));

      const { data: topics, error: topicsError } = await supabase
        .from('topics')
        .insert(topicsToInsert)
        .select();

      if (topicsError) {
        console.error(`Error inserting topics for ${cert.title}:`, topicsError);
        continue;
      }

      console.log(`Successfully inserted topics for ${cert.title}:`, topics);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

testConnection(); 