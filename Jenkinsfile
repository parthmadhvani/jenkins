pipeline {
    agent any
    
    environment {
        GIT_URL = 'https://github.com/parthmadhvani/jenkins.git'
        GIT_BRANCH = 'main'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // No credentials needed for a public repository
                git branch: "${env.GIT_BRANCH}", url: "${env.GIT_URL}"
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Add build commands here
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands here
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add deploy commands here
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up workspace...'
            deleteDir()
        }
    }
}
