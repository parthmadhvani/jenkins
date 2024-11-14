pipeline {
    agent any

    environment {
        // Define SonarQube server name configured in Jenkins (Manage Jenkins -> Configure System -> SonarQube Servers)
        SONARQUBE_SERVER = 'sonar'  // Update with the actual name of your SonarQube server configuration
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
                    withSonarQubeEnv(SONARQUBE_SERVER) {
                        // Update the command to include the sonar.projectKey and other required properties
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=sonar -Dsonar.sources=. -Dsonar.host.url=http://192.168.4.30:9000 -Dsonar.login=squ_da16511a0007e20ed0aa5904449f810d6d9560af"
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
