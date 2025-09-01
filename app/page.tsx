'use client'

import { Phone, Heart, Users, Globe, CheckCircle, Plane, Clock, Shield, FileText, Building, Stethoscope, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-blue-50 to-white shadow-md border-b border-blue-100 backdrop-blur-sm">
        <div className="mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 py-4 sm:py-0">
            <div className="flex items-center space-x-3 sm:space-x-4 group mb-4 sm:mb-0">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 sm:p-3 rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <Plane className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AirMed Emergency</h1>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Critical Care Transport Services</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5">
              <div className="flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-indigo-200 hover:border-indigo-300 transition-all duration-200 group">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-indigo-600 group-hover:animate-bounce" />
                <span className="font-semibold text-sm sm:text-base text-indigo-700">1-800-AIRMED</span>
              </div>
              <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Emergency Request
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 animate-fade-in">
            Emergency Air Medical Transport
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto font-light animate-slide-up">
            When every second counts, our medical flight teams deliver critical care in the air
          </p>
          
          {/* Key Features */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="feature-card group">
              <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-red-400 mx-auto mb-4 sm:mb-6 icon-bounce" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">24/7 Emergency Response</h3>
              <p className="text-gray-700 text-base sm:text-lg">Immediate medical evacuation services available around the clock</p>
            </div>
            <div className="feature-card group">
              <Users className="h-12 w-12 sm:h-16 sm:w-16 text-emerald-400 mx-auto mb-4 sm:mb-6 icon-bounce" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Expert Medical Crew</h3>
              <p className="text-gray-700 text-base sm:text-lg">Board-certified physicians and critical care nurses on every flight</p>
            </div>
            <div className="feature-card group sm:col-span-2 md:col-span-1">
              <Globe className="h-12 w-12 sm:h-16 sm:w-16 text-cyan-400 mx-auto mb-4 sm:mb-6 icon-bounce" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Global Coverage</h3>
              <p className="text-gray-700 text-base sm:text-lg">International medical repatriation and domestic emergency transport</p>
            </div>
          </div>
          
          <button className="btn-primary mt-12 text-lg px-8 py-4">
            Request Emergency Transport
          </button>
        </div>
      </section>

      {/* How to Request Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">How to Request Services</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Emergency Requests */}
            <div className="card bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-xl mr-4 icon-bounce">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-red-700">Emergency Requests</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-red-700">Call Emergency Hotline</h4>
                    <p className="text-gray-600">1-800-AIRMED (24/7)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-red-700">Medical Assessment</h4>
                    <p className="text-gray-600">Our team evaluates the situation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-red-700">Immediate Dispatch</h4>
                    <p className="text-gray-600">Aircraft and crew deployed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Planned Transport */}
            <div className="card bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl mr-4 icon-bounce">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-indigo-700">Planned Transport</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Schedule Consultation</h4>
                    <p className="text-gray-600">Contact our planning team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Medical Clearance</h4>
                    <p className="text-gray-600">Review patient condition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Flight Coordination</h4>
                    <p className="text-gray-600">Arrange all transport details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documentation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Required Documentation</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold">Patient Documentation</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Complete medical records</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Current physician orders</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Insurance authorization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Emergency contact information</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Patient identification documents</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">International Requirements</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Valid passport or visa</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Customs declarations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Medical clearance certificates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Embassy notifications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>International insurance coverage</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-yellow-600 mr-3" />
              <div>
                <h4 className="font-semibold text-yellow-800">Documentation Assistance</h4>
                <p className="text-yellow-700">Our team can help expedite required paperwork during emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Provider Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Medical Provider Partnerships</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <Building className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-red-700">Hospital Networks</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Mayo Clinic Network</li>
                <li>• Johns Hopkins Medicine</li>
                <li>• Cleveland Clinic</li>
                <li>• Kaiser Permanente</li>
                <li>• Partners HealthCare</li>
              </ul>
            </div>

            <div className="card text-center">
              <Stethoscope className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-green-700">Specialty Centers</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Cardiac Care Centers</li>
                <li>• Trauma Level I Facilities</li>
                <li>• Pediatric Hospitals</li>
                <li>• Cancer Treatment Centers</li>
                <li>• Burn Treatment Units</li>
              </ul>
            </div>

            <div className="card text-center">
              <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-blue-700">International Partners</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• European Medical Centers</li>
                <li>• Asian Hospital Networks</li>
                <li>• Canadian Health Systems</li>
                <li>• South American Facilities</li>
                <li>• Australian Medical Centers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Care Coordination */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Seamless Care Coordination</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct communication between our medical crew and receiving facilities ensures continuity of care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Pre-arrival coordination</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Medical record transfers</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Specialized equipment coordination</h3>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="btn-primary">View All Partners</button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-bg text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready When You Need Us</h2>
          <p className="text-xl mb-8">Our emergency response team is standing by 24/7 to provide critical care transport</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-emergency text-lg px-8 py-4">
              Emergency: 1-800-AIRMED
            </button>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  HIPAA Compliant
                </span>
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  FAA Certified
                </span>
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  CAMTS Accredited
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}