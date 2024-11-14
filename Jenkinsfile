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
