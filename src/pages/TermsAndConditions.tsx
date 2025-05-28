import React from 'react'

const TermsAndConditions :React.FC= () => {
  return (
    <div>
      <header className="bg-red-500 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <i className="fas fa-film text-2xl"></i>
                    <div>
                        <h1 className="text-xl font-bold">OFDC</h1>
                        <p className="text-red-100 text-sm">Odisha Film Development Corporation</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="text-red-100 text-sm">Preview Theatre Booking Portal</p>
                </div>
            </div>
        </div>
    </header>

    <main className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Terms and Conditions</h2>
                <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Preview Theatre Booking Portal</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <div className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-3"></i>
                    <div>
                        <p className="text-gray-700 font-medium">Important Notice</p>
                        <p className="text-gray-600 text-sm mt-1">Please read these Terms and Conditions carefully before signing up on the Odisha Film Development Corporation (OFDC) Preview Theatre Booking Portal. By registering and creating an account, you agree to be bound by these Terms.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                    <h3 className="text-xl font-semibold text-gray-800">Eligibility</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <i className="fas fa-check-circle text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>The Portal is intended for use by individuals or entities who are authorized representatives of film production houses, studios, or other eligible organizations.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-check-circle text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Users must be at least 18 years of age to register.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-check-circle text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Each user must provide a <strong>unique mobile number and email ID</strong> during registration. <strong>A mobile number and email ID once used for creating an account cannot be reused to register or log in to another account.</strong></span>
                    </li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                    <h3 className="text-xl font-semibold text-gray-800">Account Creation</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <i className="fas fa-user-plus text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>You agree to provide accurate, current, and complete information during the registration process.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-shield-alt text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-ban text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Misrepresentation of identity or affiliation will result in immediate suspension or termination of your account.</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                    <h3 className="text-xl font-semibold text-gray-800">Use of Personal Information</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <i className="fas fa-database text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Personal and organizational information provided during sign-up will be used strictly for the purpose of theatre booking and communication related to OFDC services.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-lock text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>The information will be handled in accordance with applicable data protection laws and government data handling policies.</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                    <h3 className="text-xl font-semibold text-gray-800">Acceptable Use</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <i className="fas fa-gavel text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>The Portal may only be used for lawful purposes related to the booking and use of the OFDC Preview Theatre.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Any misuse, including but not limited to unauthorized bookings, reselling of slots, or submitting false information, is strictly prohibited and may lead to legal action.</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</div>
                    <h3 className="text-xl font-semibold text-gray-800">Booking Terms</h3>
                </div>
                <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <i className="fas fa-calendar-check text-red-500 mr-2"></i>
                            Subject to Availability
                        </h4>
                        <p className="text-gray-700">All bookings are strictly subject to the availability of the theatre premises.</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <i className="fas fa-clock text-red-500 mr-2"></i>
                            Screening Date and Time
                        </h4>
                        <p className="text-gray-700">Screenings or events can only be held on the specific date and time slot that has been confirmed and approved by the Odisha Film Development Corporation (OFDC).</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <i className="fas fa-thumbs-up text-red-500 mr-2"></i>
                            Approval Required
                        </h4>
                        <p className="text-gray-700">Submission of a booking request and payment of booking charges <em>do not</em> guarantee confirmation of your preferred date and time for the screening/event.</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <i className="fas fa-check-double text-red-500 mr-2"></i>
                            Confirmation Process
                        </h4>
                        <p className="text-gray-700">The requested slot will only be considered confirmed once you see the booking status marked as <strong className="text-red-600">"Confirmed"</strong>, which shall be deemed as formal approval by OFDC. Until such confirmation is reflected, the date and time remain tentative.</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <i className="fas fa-edit text-red-500 mr-2"></i>
                            Modifications
                        </h4>
                        <p className="text-gray-700">Any request to modify an already approved booking date or time will be subject to fresh availability and <em>must be re-approved</em> by OFDC. Approval of the original booking does not extend to modified dates unless explicitly confirmed.</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <i className="fas fa-calendar-times text-red-500 mr-2"></i>
                            Screenings on Government Holidays
                        </h4>
                        <p className="text-gray-700">CBFC Screenings or any other events requested on State Government Holidays shall be made available only after the approval of management of OFDC and booking status marked as <strong className="text-red-600">"Confirmed"</strong>.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</div>
                    <h3 className="text-xl font-semibold text-gray-800">Disclaimer</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <i className="fas fa-info-circle text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>The Portal is provided on an "as-is" and "as-available" basis. While OFDC endeavors to maintain accuracy and uptime, it does not guarantee uninterrupted or error-free service.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fas fa-shield-alt text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>OFDC will not be liable for any direct, indirect, or consequential losses arising from the use of the Portal.</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">7</div>
                    <h3 className="text-xl font-semibold text-gray-800">Amendments</h3>
                </div>
                <p className="text-gray-700 flex items-start">
                    <i className="fas fa-sync-alt text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span>These Terms may be updated from time to time without prior notice. Continued use of the Portal after changes are posted constitutes acceptance of the revised Terms.</span>
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">8</div>
                    <h3 className="text-xl font-semibold text-gray-800">Governing Law</h3>
                </div>
                <p className="text-gray-700 flex items-start">
                    <i className="fas fa-balance-scale text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span>These Terms shall be governed and construed in accordance with the laws of India and the jurisdiction of the Hon'ble Courts of Odisha.</span>
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">9</div>
                    <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                </div>
                <p className="text-gray-700 mb-4">For queries or support regarding registration or bookings, please contact:</p>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-3">Odisha Film Development Corporation Ltd.</h4>
                    <div className="space-y-2 text-gray-700">
                        <div className="flex items-start">
                            <i className="fas fa-map-marker-alt text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span>1st Floor, Chalachitra Bhawan, Buxi Bazar, Cuttack, Odisha, Pin-753001</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-red-500 mr-3 flex-shrink-0"></i>
                            <a href="mailto:mdodfilm@gmail.com" className="text-red-600 hover:text-red-800 transition-colors">mdodfilm@gmail.com</a>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-phone text-red-500 mr-3 flex-shrink-0"></i>
                            <a href="tel:06712301659" className="text-red-600 hover:text-red-800 transition-colors">0671-2301659</a>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-globe text-red-500 mr-3 flex-shrink-0"></i>
                            <a href="https://odfilms.odisha.gov.in" target="_blank" className="text-red-600 hover:text-red-800 transition-colors">https://odfilms.odisha.gov.in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-red-500 text-white rounded-lg shadow-lg p-6 mt-8">
            <div className="text-center">
                <i className="fas fa-handshake text-3xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Agreement Acknowledgment</h3>
                <p className="text-red-100">By using the OFDC Preview Theatre Booking Portal, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
            </div>
        </div>
    </main>

    <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">© 2024 Odisha Film Development Corporation. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Last updated: May 28, 2025</p>
        </div>
    </footer>
    </div>
  )
}

export default TermsAndConditions
