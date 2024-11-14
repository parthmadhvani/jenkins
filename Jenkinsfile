// pipeline {
//     agent any

//     environment {
//         // Define SonarQube server name configured in Jenkins
//         SONARQUBE_SERVER = 'sonar'
//     }

//     stages {
//         stage('Checkout Code') {
//             steps {
//                 // Checkout the code from your source control (e.g., Git)
//                 git url: 'https://github.com/parthmadhvani/jenkins.git', branch: 'main'
//             }
//         }

//         stage('SonarQube Analysis') {
//             steps {
//                 script {
//                     // Run SonarQube analysis
//                     withSonarQubeEnv(SONARQUBE_SERVER) {
//                         if (isUnix()) {
//                             // Use 'sonar-scanner' for Unix-based systems (Linux/macOS)
//                             sh '''
//                                 sonar-scanner \
//                                 -Dsonar.projectKey=sonar \
//                                 -Dsonar.sources=. \
//                                 -Dsonar.host.url=http://192.168.4.30:9000 \
//                                 -Dsonar.token=squ_da16511a0007e20ed0aa5904449f810d6d9560af
//                             '''
//                         } else {
//                             // Use 'sonar-scanner.bat' for Windows
//                             bat '''
//                                 sonar-scanner.bat \
//                                 -Dsonar.projectKey=sonar \
//                                 -Dsonar.sources=. \
//                                 -Dsonar.host.url=http://localhost:9000 \
//                                 -Dsonar.token=sqp_a76ce9780f487c48f3fcfda1b50ede165c11d64f
//                             '''
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Build succeeded! SonarQube analysis completed successfully.'
//         }
//         failure {
//             echo 'Build failed! Please check the logs and the SonarQube analysis results for more details.'
//         }
//     }
// }

pipeline {
    agent any

    environment {
        // Define SonarQube server name configured in Jenkins (go to Manage Jenkins -> Configure System -> SonarQube Servers)
        SONARQUBE_SERVER = 'sonar'  // Name of your SonarQube server
    }

    stages {
        stage('SCM') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'sonar'  // Name of the SonarQube Scanner tool
                    withSonarQubeEnv(SONARQUBE_SERVER) {  // Ensure SonarQube environment is set up correctly
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'SonarQube analysis completed successfully.'
        }
        failure {
            echo 'SonarQube analysis failed.'
        }
    }
}

      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}
