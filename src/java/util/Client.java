/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package util;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import protoc.ServiceProto.RunGameRequest;

/**
 *
 * @author ehab
 */
public class Client {

    private static final String SERVER_HOST = "localhost";
    private static final int SERVER_PORT = 40040;//4242;

    public Client() {

    }
    // Create a channel to connect to the server

    public void runGame(int choice) {
        ManagedChannel channel = ManagedChannelBuilder.forAddress(SERVER_HOST, SERVER_PORT)
                .usePlaintext() // Use plaintext communication. In production, consider using encryption.
                .build();
        String p1="";
        String p2="";
        
        if (choice == 1) {
            p1 = "GARNET";
            p2 = "ZEN";
        } else if (choice == 2) {
            p1 = "LUD";
            p2 = "GARNET";
        } else if (choice == 3) {
            p1 = "LUD";
            p2 = "ZEN";
        }
// ...
// Create a builder for RunGameRequest
        RunGameRequest runGameRequest = RunGameRequest.newBuilder().
                setCharacter1(p1).
                setCharacter2(p2).
                setPlayer1("Keyboard").
                setPlayer2("gRPC").
                setGameNumber(3).build();

// Build the RunGameRequest instance
        // Create a blocking stub for the Greeter service
        //      GreeterGrpc.GreeterBlockingStub blockingStub = GreeterGrpc.newBlockingStub(channel);
        protoc.ServiceGrpc.ServiceBlockingStub serviceStub = protoc.ServiceGrpc.newBlockingStub(channel);

// protoc.ServiceGrpc.ServiceStub servicetub = protoc.ServiceGrpc.n.newServiceStub(channel);
        // Create a blocking stub for the Greeter service
//    protoc.ServiceGrpc.ServiceBlockingStub serviceStub = protoc.ServiceGrpc.newBlockingStub(channel);
        try {
            serviceStub.runGame(runGameRequest);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        } finally {
            // Shutdown the channel when done
            channel.shutdown();
        }
    }




    public void runGame1(int choice) {
        ManagedChannel channel = ManagedChannelBuilder.forAddress(SERVER_HOST, SERVER_PORT)
                .usePlaintext() // Use plaintext communication. In production, consider using encryption.
                .build();
        String p1="";
        String p2="";
        
        if (choice == 1) {
            p1 = "GARNET";
            p2 = "ZEN";
        } else if (choice == 2) {
            p1 = "LUD";
            p2 = "GARNET";
        } else if (choice == 3) {
            p1 = "LUD";
            p2 = "ZEN";
        }
// ...
// Create a builder for RunGameRequest
        RunGameRequest runGameRequest = RunGameRequest.newBuilder().
                setCharacter1(p1).
                setCharacter2(p2).
                setPlayer1("Keyboard").
                setPlayer2("gRPC").
                setGameNumber(3).build();

// Build the RunGameRequest instance
        // Create a blocking stub for the Greeter service
        //      GreeterGrpc.GreeterBlockingStub blockingStub = GreeterGrpc.newBlockingStub(channel);
        protoc.ServiceGrpc.ServiceBlockingStub serviceStub = protoc.ServiceGrpc.newBlockingStub(channel);

// protoc.ServiceGrpc.ServiceStub servicetub = protoc.ServiceGrpc.n.newServiceStub(channel);
        // Create a blocking stub for the Greeter service
//    protoc.ServiceGrpc.ServiceBlockingStub serviceStub = protoc.ServiceGrpc.newBlockingStub(channel);
        try {
            serviceStub.runGame(runGameRequest);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        } finally {
            // Shutdown the channel when done
            channel.shutdown();
        }
    }
}
