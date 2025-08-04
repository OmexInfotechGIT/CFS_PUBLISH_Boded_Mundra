USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnLoadedContainerOutGPDetails_History]    Script Date: 1/26/2024 12:02:59 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnLoadedContainerOutGPGWDetails_History')
BEGIN
 DROP TABLE trnLoadedContainerOutGPGWDetails_History
END
GO


CREATE TABLE [dbo].[trnLoadedContainerOutGPDetails_History](
	[trnLoadedContainerOutGPDetails_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnLoadedContainerOutGPDetailsID] [int] NULL,
	[trnLoadedContainerOutGPID] [int] NULL,
	[TruckNo] [varchar](255) NOT NULL,
	[trnEmptyTruckGateInID] [int] NULL,
	[CargoTerminalSealNo] [varchar](255) NULL,
	[MovetoLocation] [varchar](255) NULL,
	[MovetoLocationID] [int] NULL,
	[trnLoadedContainerOutWOID] [int] NULL,
	[trnDocumentContainerID] [int] NULL,
	[Remarks] [varchar](255) NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[trnexportmovementWOContainerDetailsID] [int] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY]
GO


