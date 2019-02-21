var searchIndex = {};
searchIndex["mio"] = {"doc":"A fast, low-level IO library for Rust focusing on non-blocking APIs, event notification, and other useful utilities for building high performance IO apps.","items":[[3,"Poll","mio","Polls for readiness events on all registered values.",null,null],[3,"Registration","","Handle to a user space `Poll` registration.",null,null],[3,"SetReadiness","","Updates the readiness state of the associated `Registration`.",null,null],[3,"PollOpt","","Options supplied when registering an `Evented` handle with `Poll`",null,null],[3,"Ready","","A set of readiness event kinds",null,null],[3,"Token","","Associates readiness notifications with [`Evented`] handles.",null,null],[12,"0","","",0,null],[3,"Events","","A collection of readiness events.",null,null],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"pollopt"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"cmp","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"ordering"}}],[11,"empty","","Return a `PollOpt` representing no set options.",1,{"inputs":[],"output":{"name":"pollopt"}}],[11,"edge","","Return a `PollOpt` representing edge-triggered notifications.",1,{"inputs":[],"output":{"name":"pollopt"}}],[11,"level","","Return a `PollOpt` representing level-triggered notifications.",1,{"inputs":[],"output":{"name":"pollopt"}}],[11,"oneshot","","Return a `PollOpt` representing oneshot notifications.",1,{"inputs":[],"output":{"name":"pollopt"}}],[11,"is_edge","","Returns true if the options include edge-triggered notifications.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_level","","Returns true if the options include level-triggered notifications.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_oneshot","","Returns true if the options includes oneshot.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"contains","","Returns true if `self` is a superset of `other`.",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"insert","","Adds all options represented by `other` into `self`.",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":null}],[11,"remove","","Removes all options represented by `other` from `self`.",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":null}],[11,"bitor","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"bitxor","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"bitand","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"sub","","",1,{"inputs":[{"name":"self"},{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"ready"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"option"}}],[11,"lt","","",2,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"le","","",2,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"gt","","",2,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"ge","","",2,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"cmp","","",2,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"ordering"}}],[11,"empty","","Returns the empty `Ready` set.",2,{"inputs":[],"output":{"name":"ready"}}],[11,"readable","","Returns a `Ready` representing readable readiness.",2,{"inputs":[],"output":{"name":"ready"}}],[11,"writable","","Returns a `Ready` representing writable readiness.",2,{"inputs":[],"output":{"name":"ready"}}],[11,"all","","Returns a `Ready` representing readiness for all operations.",2,{"inputs":[],"output":{"name":"ready"}}],[11,"is_empty","","Returns true if `Ready` is the empty set",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_readable","","Returns true if the value includes readable readiness",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_writable","","Returns true if the value includes writable readiness",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"insert","","Adds all readiness represented by `other` into `self`.",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"remove","","Removes all options represented by `other` from `self`.",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"contains","","Returns true if `self` is a superset of `other`.",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"bool"}}],[11,"from_usize","","Create a `Ready` instance using the given `usize` representation.",2,{"inputs":[{"name":"usize"}],"output":{"name":"ready"}}],[11,"as_usize","","Returns a `usize` representation of the `Ready` value.",2,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"bitor","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"ready"}}],[11,"bitor_assign","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"bitxor","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"ready"}}],[11,"bitxor_assign","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"bitand","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"ready"}}],[11,"bitand_assign","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"sub","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"ready"}}],[11,"sub_assign","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"setreadiness"}}],[11,"new","","Return a new `Poll` handle.",4,{"inputs":[],"output":{"name":"result"}}],[11,"register","","Register an `Evented` handle with the `Poll` instance.",4,{"inputs":[{"name":"self"},{"name":"e"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","Re-register an `Evented` handle with the `Poll` instance.",4,{"inputs":[{"name":"self"},{"name":"e"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","Deregister an `Evented` handle with the `Poll` instance.",4,{"inputs":[{"name":"self"},{"name":"e"}],"output":{"name":"result"}}],[11,"poll","","Wait for readiness events",4,{"inputs":[{"name":"self"},{"name":"events"},{"name":"option"}],"output":{"name":"result"}}],[11,"poll_interruptible","","Like `poll`, but may be interrupted by a signal",4,{"inputs":[{"name":"self"},{"name":"events"},{"name":"option"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_raw_fd","","",4,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"with_capacity","","Return a new `Events` capable of holding up to `capacity` events.",5,{"inputs":[{"name":"usize"}],"output":{"name":"events"}}],[11,"capacity","","Returns the number of `Event` values that `self` can hold.",5,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns `true` if `self` contains no `Event` values.",5,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"iter","","Returns an iterator over the `Event` values.",5,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"clear","","Clearing all `Event` values from container explicitly.",5,{"inputs":[{"name":"self"}],"output":null}],[11,"into_iter","","",5,null],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new2","","Create and return a new `Registration` and the associated `SetReadiness`.",6,null],[11,"register","","",6,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",6,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",6,{"inputs":[{"name":"self"},{"name":"poll"}],"output":{"name":"result"}}],[11,"drop","","",6,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"readiness","","Returns the registration's current readiness.",3,{"inputs":[{"name":"self"}],"output":{"name":"ready"}}],[11,"set_readiness","","Set the registration's readiness",3,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"unixready"}],"output":{"name":"ready"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"token"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"token"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"token"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"token"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"self"},{"name":"token"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"self"},{"name":"token"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"self"},{"name":"token"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"self"},{"name":"token"}],"output":{"name":"bool"}}],[11,"cmp","","",0,{"inputs":[{"name":"self"},{"name":"token"}],"output":{"name":"ordering"}}],[11,"hash","","",0,null],[11,"from","","",0,{"inputs":[{"name":"usize"}],"output":{"name":"token"}}],[0,"net","","Networking primitives",null,null],[3,"TcpListener","mio::net","A structure representing a socket server",null,null],[3,"TcpStream","","A non-blocking TCP stream between a local socket and a remote socket.",null,null],[3,"UdpSocket","","A User Datagram Protocol socket.",null,null],[11,"connect","","Create a new TCP stream and issue a non-blocking connect to the specified address.",7,{"inputs":[{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"connect_stream","","Creates a new `TcpStream` from the pending socket inside the given `std::net::TcpBuilder`, connecting it to the address specified.",7,{"inputs":[{"name":"tcpstream"},{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"from_stream","","Creates a new `TcpStream` from a standard `net::TcpStream`.",7,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"peer_addr","","Returns the socket address of the remote peer of this TCP connection.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the socket address of the local half of this TCP connection.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"shutdown","","Shuts down the read, write, or both halves of this connection.",7,{"inputs":[{"name":"self"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",7,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_recv_buffer_size","","Sets the value of the `SO_RCVBUF` option on this socket.",7,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"recv_buffer_size","","Gets the value of the `SO_RCVBUF` option on this socket.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_send_buffer_size","","Sets the value of the `SO_SNDBUF` option on this socket.",7,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"send_buffer_size","","Gets the value of the `SO_SNDBUF` option on this socket.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on this socket.",7,{"inputs":[{"name":"self"},{"name":"option"}],"output":{"name":"result"}}],[11,"keepalive","","Returns whether keepalive messages are enabled on this socket, and if so the duration of time between them.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",7,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",7,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_linger","","Sets the value for the `SO_LINGER` option on this socket.",7,{"inputs":[{"name":"self"},{"name":"option"}],"output":{"name":"result"}}],[11,"linger","","Gets the value of the `SO_LINGER` option on this socket.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"peek","","Receives data on the socket from the remote address to which it is connected, without removing that data from the queue. On success, returns the number of bytes peeked.",7,null],[11,"read_bufs","","Read in a list of buffers all at once.",7,null],[11,"write_bufs","","Write a list of buffers all at once.",7,null],[11,"read","","",7,null],[11,"write","","",7,null],[11,"flush","","",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"register","","",7,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",7,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",7,{"inputs":[{"name":"self"},{"name":"poll"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Convenience method to bind a new TCP listener to the specified address to receive new connections.",8,{"inputs":[{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"from_std","","Creates a new `TcpListener` from an instance of a `std::net::TcpListener` type.",8,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"accept","","Accepts a new `TcpStream`.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"accept_std","","Accepts a new `std::net::TcpStream`.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the local socket address of this listener.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",8,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",8,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"register","","",8,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",8,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",8,{"inputs":[{"name":"self"},{"name":"poll"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"into_raw_fd","","",7,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"as_raw_fd","","",7,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"from_raw_fd","","",7,{"inputs":[{"name":"rawfd"}],"output":{"name":"tcpstream"}}],[11,"into_raw_fd","","",8,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"as_raw_fd","","",8,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"from_raw_fd","","",8,{"inputs":[{"name":"rawfd"}],"output":{"name":"tcplistener"}}],[11,"bind","","Creates a UDP socket from the given address.",9,{"inputs":[{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"from_socket","","Creates a new mio-wrapped socket from an underlying and bound std socket.",9,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the socket address that this socket was created from.",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"send_to","","Sends data on the socket to the given address. On success, returns the number of bytes written.",9,null],[11,"recv_from","","Receives data from the socket. On success, returns the number of bytes read and the address from whence the data came.",9,null],[11,"send","","Sends data on the socket to the address previously bound via connect(). On success, returns the number of bytes written.",9,null],[11,"recv","","Receives data from the socket previously bound with connect(). On success, returns the number of bytes read.",9,null],[11,"connect","","Connects the UDP socket setting the default destination for `send()` and limiting packets that are read via `recv` from the address specified in `addr`.",9,{"inputs":[{"name":"self"},{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"set_broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",9,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this socket.",9,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this socket.",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this socket.",9,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this socket.",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",9,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",9,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",9,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",9,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",9,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",9,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",9,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"recv_bufs","","Receives a single datagram message socket previously bound with connect.",9,null],[11,"send_bufs","","Sends data on the socket to the address previously bound via connect.",9,null],[11,"register","","",9,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",9,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",9,{"inputs":[{"name":"self"},{"name":"poll"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"into_raw_fd","","",9,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"as_raw_fd","","",9,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"from_raw_fd","","",9,{"inputs":[{"name":"rawfd"}],"output":{"name":"udpsocket"}}],[0,"event","mio","Readiness event types and utilities.",null,null],[3,"Events","mio::event","A collection of readiness events.",null,null],[3,"Iter","","[`Events`] iterator.",null,null],[3,"Event","","An readiness event returned by [`Poll::poll`].",null,null],[8,"Evented","","A value that may be registered with `Poll`",null,null],[10,"register","","Register `self` with the given `Poll` instance.",10,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[10,"reregister","","Re-register `self` with the given `Poll` instance.",10,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[10,"deregister","","Deregister `self` from the given `Poll` instance",10,{"inputs":[{"name":"self"},{"name":"poll"}],"output":{"name":"result"}}],[0,"unix","mio","Unix only extensions",null,null],[3,"EventedFd","mio::unix","Adapter for [`RawFd`] providing an [`Evented`] implementation.",null,null],[12,"0","","",11,null],[3,"UnixReady","","Unix specific extensions to `Ready`",null,null],[11,"clone","mio::event","",12,{"inputs":[{"name":"self"}],"output":{"name":"event"}}],[11,"eq","","",12,{"inputs":[{"name":"self"},{"name":"event"}],"output":{"name":"bool"}}],[11,"ne","","",12,{"inputs":[{"name":"self"},{"name":"event"}],"output":{"name":"bool"}}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new `Event` containing `readiness` and `token`",12,{"inputs":[{"name":"ready"},{"name":"token"}],"output":{"name":"event"}}],[11,"readiness","","Returns the event's readiness.",12,{"inputs":[{"name":"self"}],"output":{"name":"ready"}}],[11,"token","","Returns the event's token.",12,{"inputs":[{"name":"self"}],"output":{"name":"token"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",13,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"next","","",13,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","mio::unix","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"register","","",11,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",11,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",11,{"inputs":[{"name":"self"},{"name":"poll"}],"output":{"name":"result"}}],[11,"eq","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"ne","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"unixready"}}],[11,"partial_cmp","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"option"}}],[11,"lt","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"le","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"gt","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"ge","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"cmp","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"ordering"}}],[11,"error","","Returns a `Ready` representing error readiness.",14,{"inputs":[],"output":{"name":"unixready"}}],[11,"hup","","Returns a `Ready` representing HUP readiness.",14,{"inputs":[],"output":{"name":"unixready"}}],[11,"priority","","Returns a `Ready` representing priority (`EPOLLPRI`) readiness",14,{"inputs":[],"output":{"name":"unixready"}}],[11,"is_error","","Returns true if the value includes error readiness",14,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_hup","","Returns true if the value includes HUP readiness",14,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_priority","","Returns true if `Ready` contains priority (`EPOLLPRI`) readiness",14,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"from","","",14,{"inputs":[{"name":"ready"}],"output":{"name":"unixready"}}],[11,"deref","","",14,{"inputs":[{"name":"self"}],"output":{"name":"ready"}}],[11,"deref_mut","","",14,{"inputs":[{"name":"self"}],"output":{"name":"ready"}}],[11,"bitor","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"unixready"}}],[11,"bitxor","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"unixready"}}],[11,"bitand","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"unixready"}}],[11,"sub","","",14,{"inputs":[{"name":"self"},{"name":"unixready"}],"output":{"name":"unixready"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"Token"],[3,"PollOpt"],[3,"Ready"],[3,"SetReadiness"],[3,"Poll"],[3,"Events"],[3,"Registration"],[3,"TcpStream"],[3,"TcpListener"],[3,"UdpSocket"],[8,"Evented"],[3,"EventedFd"],[3,"Event"],[3,"Iter"],[3,"UnixReady"]]};
initSearch(searchIndex);
